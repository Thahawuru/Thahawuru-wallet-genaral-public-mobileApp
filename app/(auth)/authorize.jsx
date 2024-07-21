import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import logo from "../../assets/images/tahauru-logo.png";
import word from "../../assets/images/tahauru-key.png";
import AuthorizeForm from "../../components/authorizeForm";
import { Link } from "expo-router";
import LanguageSwitcher from "../../components/languageSwitcher";

const authorize = () => {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View className="flex justify-center items-center h-screen  ">
        <View className="flex justify-center items-center w-full h-full flex-1">
          <Image source={logo} className="h-[100px] w-[100px] "></Image>
          <View className="flex flex-row justify-center items-center ">
            <Image
              resizeMode={"contain"}
              source={word}
              className=" border-2 h-[60px] w-[60px]"
            ></Image>
            <Text className="uppercase ml-1 space-x-1 text-slate-500">
              Wallet{" "}
            </Text>
          </View>
          <View className="w-[80%] mt-10">
            <AuthorizeForm />
          </View>
          <View>
            <Text className="mt-10">
              Already have an account?{" "}
              <Link className="text-blue-500 underline" href={"signin"}>
                Signin
              </Link>
            </Text>
          </View>
        </View>
        <View className="flex-[0.1] justify-end">
          <LanguageSwitcher></LanguageSwitcher>
        </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default authorize;
