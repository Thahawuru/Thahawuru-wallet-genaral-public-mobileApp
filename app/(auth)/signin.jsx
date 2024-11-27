import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import logo from "../../assets/images/tahauru-logo.png";
import word from "../../assets/images/tahauru-key.png";
import SigninForm from "../../components/signinform";
import { Link } from "expo-router";
import LanguageSwitcher from "@/components/languageSwitcher";

const signin = () => {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View className="flex justify-center h-screen items-center  ">
          <View className="h-full flex-1 w-full justify-center items-center ">
            <Image source={logo} className="h-[100px]  w-[100px] "></Image>
            <View className="flex flex-row justify-center items-center ">
              <Image
                resizeMode={"contain"}
                source={word}
                className=" h-[60px] w-[60px]"
              ></Image>
              <Text className="uppercase ml-1 space-x-1 text-slate-500">
                Wallet
              </Text>
            </View>
            <View className="w-[80%] mt-10">
              <SigninForm />
            </View>
            <View>
              <Text className="mt-10">
                Dont have an account?{" "}
                <Link className="text-blue-500 underline" href={"authorize"}>
                  Signup
                </Link>
              </Text>
            </View>
          </View>
          <View className="flex-[0.1] justify-end items-center">
            <LanguageSwitcher></LanguageSwitcher>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default signin;
