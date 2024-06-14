import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const header = () => {
  return (
    <View className="bg-[#fff] relative w-screen flex flex-row justify-start items-start h-20 border-b-[1px] border-slate-200 ">
      <View className=" flex flex-row justify-start items-center p-6">
        <Text className='text-lg text-slate-500 font-semibold'>Your Wallet</Text>
      </View>
      <View className="flex absolute right-0 w-full flex-row justify-end items-center p-6 gap-2">
        {/* <MaterialIcons name="notifications" size={22} color="gray" /> */}
        <MaterialIcons name="menu" size={26} color="gray" />
      </View>
    </View>
  );
};

export default header;
