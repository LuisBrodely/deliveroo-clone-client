import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketTotal, selectBasketItems } from "../features/basketSlice";


export default function BasketIcon() {

	const items = useSelector(selectBasketItems)

	const basketTotal = useSelector(selectBasketTotal)

  return (
    <View style={tw`absolute bottom-8 z-50 w-full`}>
      <TouchableOpacity style={tw`bg-[#00CCBB] mx-5 p-4 flex-row items-center gap-1 rounded-lg`}>
				<Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded`}>
					{items.length}
				</Text>
				<Text style={tw`flex-1 text-center text-white font-extrabold text-lg py-1 px-2`}>
					View Basket
				</Text>
				<Text style={tw`text-lg text-white font-extrabold`}>
					$ {basketTotal}
				</Text>
			</TouchableOpacity>
    </View>
  );
}
