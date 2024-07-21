import { View, Text,Keyboard } from "react-native";
import {useState} from "react";
import FormField from "./formfield";
import CustomButton from "./UI/customButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import {useAuthentication} from "../api/useAuthentication"
import AsyncStorage from "@react-native-async-storage/async-storage";


const signinform = () => {
const [password,setPassword]=useState('');
const [email,setEmail]=useState('');


const {signin}=useAuthentication();
const {t}=useTranslation();

const handlePasswordChange = (value) => {
setPassword(value);
};


const handleEmailChange = (value) => {
setEmail(value);
};

  const submit = async() => {
    Keyboard.dismiss();
    try {
      const response = await signin({email,password});
      if(response.status===200){
        alert("Login Successfull");
        AsyncStorage.setItem("user",JSON.stringify(response.data.data.user));
        router.push("/home");
      }
    }catch(error){
alert(error.message);
  
  };
};

  return (
    <View className="w-full flex flex-col justify-center">
      <FormField
        label={t("email")}
        placeholder={t("email")}
        onChangeText={handleEmailChange}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label={t("password")}
        onChangeText={handlePasswordChange}
        placeholder={t("password")}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <View className='mt-4'>
      <CustomButton title={t("signin")} handelPress={submit}></CustomButton>
      </View>
    </View>
  );
};

export default signinform;
