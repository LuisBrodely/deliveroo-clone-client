import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { urlFor } from "../../sanity";

export default function DishRow({
	id,
	name, 
	description,
	price,
	image
}) {
  return (
    <TouchableOpacity style={tw`bg-white border p-4 border-gray-200`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1 pr-4`}>
          <Text style={tw`text-lg mb-1`}>{name}</Text>
          <Text style={tw`text-gray-400 mt-2`}>{description}</Text>
          <Text style={tw`text-gray-400 mt-2`}>$ {price}.00 MXN</Text>
        </View>
        <View>
          <Image 
            source={{uri: urlFor(image).url() }}
            style={tw`h-20 w-20 bg-gray-300 p-4`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
