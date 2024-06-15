import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header-profile";
import NIC from "../../components/wallet/nicCard";
import Passport from "../../components/wallet/passportCard";
import DrivingLicence from "../../components/wallet/drivingLicenceCard";
import { useCards } from "../../api/useCards";


const profile = () => {

  const { getNIC ,getDrivingLicence,getPassport } = useCards();

  const nic = getNIC();
  const licence = getDrivingLicence();
  const passport = getPassport();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header title={"Your Wallet"}></Header>
          </View>
          <View className='w-[90%]'>
            <NIC nic={nic}></NIC>
          </View>
          <View className='w-[90%] '>
            <DrivingLicence licence ={licence} ></DrivingLicence>
          </View>
          <View className='w-[90%] '>
           <Passport passport={passport}></Passport>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
