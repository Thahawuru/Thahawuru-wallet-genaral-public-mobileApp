import { View, Text, Keyboard, TouchableOpacity } from "react-native";
import { useState } from "react";
import FormField from "./formfield";
import CustomButton from "./UI/customButton";
import { router } from "expo-router";
import { useAuthentication } from "../api/useAuthentication";
import { useTranslation } from "react-i18next";
import { useToastContext } from "@/hooks/useToastContext";

const signupform = ({ nic, securitykey }) => {
  const { showToast } = useToastContext();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");

  const { t } = useTranslation();

  const { signup } = useAuthentication();

  const submit = async () => {
    Keyboard.dismiss();
    if (password === passwordConfirm) {
      try {
        const response = await signup({
          email,
          password,
          OTP,
          nic: nic,
          securitykey: securitykey,
        });
        if (response.status === 201) {
          showToast({ type: "success", text: "Signup Success" });
          router.push("/signin");
        }
      } catch (error) {
        showToast({ type: "danger", text: "Signup Failed!" });
      }
    } else {
      console.log("passwords do not match");
    }

    // router.push("/home");
  };

  return (
    <View className="w-full flex flex-col justify-center">
      <FormField
        label={t("email")}
        placeholder={t("email")}
        onChangeText={(value) => setEmail(value)}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label={t("password")}
        onChangeText={(value) => setPassword(value)}
        placeholder={t("password")}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label={t("re-pass")}
        onChangeText={(value) => setPasswordConfirm(value)}
        placeholder={t("re-pass")}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <FormField
        label={t("otp")}
        onChangeText={(value) => setOTP(value)}
        placeholder={t("otp")}
        styles={{ container: "px-3 ", label: "" }}
      ></FormField>
      <View className="my-1 flex justify-start">
        <TouchableOpacity className="bg-primary-blue w-24 flex justify-center items-center px-5 py-1 rounded-sm ">
          <Text className="text-slate-300">Send code</Text>
        </TouchableOpacity>
        {/* <Text className="text-slate-500 text-xs">
          By clicking Sign up, you agree to our terms and conditions
        </Text> */}
      </View>
      <View className="mt-4">
        <CustomButton title={t("signup")} handelPress={submit}></CustomButton>
      </View>
    </View>
  );
};

export default signupform;
