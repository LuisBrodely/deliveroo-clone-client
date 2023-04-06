import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from '../../sanity'

export default function HomeScreen() {
  const navigation = useNavigation();
  const uri =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg";

  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == 'featured'] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `).then(data => setFeaturedCategories(data))
  },[])

  // console.log(featuredCategories)

  return (
    <SafeAreaView style={tw`bg-white pt-5 pb-10`}>
      <View style={tw`bg-white pb-4 flex-row items-center px-4 gap-2`}>
        <Image source={{ uri }} style={tw`h-7 w-7 rounded-full p-4`} />
        <View style={tw`flex-1`}>
          <Text style={tw`font-bold text-gray-300 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#00BBCC" />
          </Text>
        </View>
        <UserIcon size={35} color="#00BBCC" />
      </View>

      <View style={tw`flex-row items-center px-4 pb-2`}>
        <View
          style={tw`flex-row p-3 bg-gray-200 items-center gap-2 flex-1 mr-2`}
        >
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cousines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00BBCC" size={24} />
      </View>

      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        {featuredCategories.map((Category) => (
          <FeaturedRow
            key={Category._id}
            title={Category.name}
            description={Category.short_description}
            id={Category._id}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}
