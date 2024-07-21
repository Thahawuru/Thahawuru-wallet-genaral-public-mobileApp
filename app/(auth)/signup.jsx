import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  ScrollView,
} from "react-native";
import logo from "../../assets/images/tahauru-logo.png";
import word from "../../assets/images/tahauru-key.png";
import SignupForm from "../../components/signupform";
import { Link, useLocalSearchParams } from "expo-router";
import LanguageSwitcher from "../../components/languageSwitcher";

const signup = () => {
  const { NIC, PIN } = useLocalSearchParams();

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View className="flex justify-center items-center h-screen ">
          <View className="flex justify-center items-center w-full h-full flex-1 ">
            <Image source={logo} className="h-[100px] w-[100px] "></Image>
            <View className="flex flex-row justify-center items-center ">
              {/* <Image resizeMode= {'contain'}  source={word} className=" border-2 h-[60px] w-[60px]"></Image> */}
              <Text className="uppercase mt-5 space-x-1 text-sky-700 font-bold text-xl ">
                Signup
              </Text>
            </View>
            <View className="w-[80%] mt-8">
              <SignupForm nic={NIC} securitykey={PIN} />
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
          <View className="flex-[0.05]">
            <LanguageSwitcher></LanguageSwitcher>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default signup;
