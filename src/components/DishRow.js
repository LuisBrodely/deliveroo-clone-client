import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

export default function DishRow({
	id,
	name, 
	description,
	price,
	image
}) {

  const [isPressed, setIsPressed] = useState(false) 

  return (
    <View style={tw`border border-gray-200`}>
      <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)}
        style={tw`bg-white p-4`}
      >
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

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`pb-3 gap-2 flex-row items-center `}>
            <TouchableOpacity>
              <MinusCircleIcon size={40} color='#00CCBB'/>
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} color='#00CCBB'/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
