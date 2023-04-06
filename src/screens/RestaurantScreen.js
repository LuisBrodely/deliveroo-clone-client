import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from "twrnc";
import { urlFor } from '../../sanity'
import { StatusBar } from 'expo-status-bar';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon, QuestionMarkCircleIcon, ChevronRightIcon } from "react-native-heroicons/outline";
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

export default function Restaurant() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }
  } = useRoute()

  return (
    <>
      <BasketIcon/>
      <ScrollView>
        <StatusBar style='light'/>
        <View style={tw`relative`}>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            style={tw`w-full h-56 bg-gray-300 p-4`}
          />
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}
          >
            <ArrowLeftIcon size={20} color='#00BBCC'/>
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>
              {title}
            </Text>

            <View style={tw`my-1 gap-2 flex-row`}>
              <View style={tw`items-center flex-row gap-1`}>
                <StarIcon size={22} opacity={0.5} color='green'/>
                <Text style={tw`text-xs text-gray-500`}>
                  <Text style={tw`text-green-500`}>{rating}</Text> - {genre}
                </Text>
              </View>
              <View style={tw`items-center flex-row gap-1`}>
                <MapPinIcon size={22} opacity={0.4} color='gray'/>
                <Text style={tw`text-xs text-gray-500`}>
                  Nearby - {address}
                </Text>
              </View>
            </View>
        
            <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>
          </View>

          <TouchableOpacity style={tw`flex-row gap-2  items-center p-4 border border-gray-200`}>
            <QuestionMarkCircleIcon size={20} color='gray' opacity={0.5} />
            <Text style={tw`pl-2 font-bold flex-1`}>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00BBCC'/>
          </TouchableOpacity>
        </View>

        <View style={tw`pb-30`}>
          <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>

          {dishes && dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}