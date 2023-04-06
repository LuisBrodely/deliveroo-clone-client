import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

export default function CategoryCard({ title, img }) {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image source={{ uri: img }} style={tw`h-24 w-24 rounded p-4`} />
      <Text style={tw`absolute left-1 bottom-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
