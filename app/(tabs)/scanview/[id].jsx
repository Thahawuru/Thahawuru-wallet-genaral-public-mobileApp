import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/header-profile";
import NIC from "@/components/wallet/nicCard";
import DrivingLicence from "@/components/wallet/drivingLicenceCard";
import Passport from "@/components/wallet/passportCard";
import { useCards } from "@/api/useCards";
import { useQr } from "@/api/useQr";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useLocalSearchParams } from "expo-router";
import { useScanContext } from "../../../hooks/useScanContext";

const scandetails = () => {
  const { id } = useLocalSearchParams();
  const { getNIC, getDrivingLicence, getPassport } = useCards();
  const { getQrDetails } = useQr();
  const [qrDetails, setQrDetails] = useState([]);

  const {data}=useScanContext();



  const nic = getNIC();

  const passport = getPassport();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-full min-h-screen w-screen  bg-[#fff] flex justify-start items-center gap-y-4">
          <View className="w-full">
            <Header back={true} title={"Scanned Wallet"}></Header>
          </View>
          <View className="w-[90%]">
            <NIC nic={data?.nicDetails}></NIC>
          </View>
          <View className="w-[90%] ">
            <DrivingLicence licence={data?.licenceDetails}></DrivingLicence>
          </View>
          <View className="w-[90%] ">
            <Passport passport={passport}></Passport>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default scandetails;
