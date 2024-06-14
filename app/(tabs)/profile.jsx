import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import NIC from "../../components/wallet/nicCard";
import Passport from "../../components/wallet/passportCard";
import DrivingLicence from "../../components/wallet/drivingLicenceCard";


const profile = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header></Header>
          </View>
          <View className='w-[90%]'>
            <NIC></NIC>
          </View>
          <View className='w-[90%] '>
            <DrivingLicence></DrivingLicence>
          </View>
          <View className='w-[90%] '>
           <Passport></Passport>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
