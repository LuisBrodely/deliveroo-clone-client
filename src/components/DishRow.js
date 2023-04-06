import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../features/basketSlice";

export default function DishRow({
	id,
	name, 
	description,
	price,
	image
}) {

  const dispatch = useDispatch()
  const items = useSelector((state) => selectBasketItemsWithId(state, id))

  const [isPressed, setIsPressed] = useState(false) 

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}))
  }

  const removeItemFromBasket = () => {
    if(!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  return (
    <View style={tw`border border-gray-200`}>
      <TouchableOpacity 
        onPress={() => setIsPressed(!isPressed)}
        style={tw`bg-white p-4`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-4`}>
            <Text style={tw`text-lg mb-1 font-semibold`}>{name}</Text>
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
            <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
              <MinusCircleIcon size={40} color={items.length > 0 ? '#00CCBB' : 'gray'}/>
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color='#00CCBB'/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
