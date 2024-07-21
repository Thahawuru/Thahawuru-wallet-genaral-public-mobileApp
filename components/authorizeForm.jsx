import { View, Text } from "react-native";
import { useState } from "react";
import FormField from "./formfield";
import CustomButton from "./UI/customButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";

const authorizeform = () => {
  const [NIC, setNIC] = useState("");
  const [PIN, setPIN] = useState("");

  const { t } = useTranslation();

  const submit = () => {
    if (NIC.length === 0 || PIN.length === 0) {
      alert("Not valid");
    } else {
      router.push({
        pathname: "/signup",
        params: { NIC, PIN },
      });
    }
  };

  return (
    <View className="w-full flex flex-col justify-center">
      <FormField
        label={t("nic")}
        placeholder={t("nic")}
        styles={{ container: "px-3 ", label: "" }}
        onChangeText={(value) => setNIC(value)}
      ></FormField>
      <FormField
        label={t("securitykey")}
        placeholder={t("securitykey")}
        styles={{ container: "px-3 ", label: "" }}
        onChangeText={(value) => setPIN(value)}
      ></FormField>
      <View className="mt-4">
        <CustomButton
          title={t("authorize")}
          handelPress={submit}
        ></CustomButton>
      </View>
    </View>
  );
};

export default authorizeform;
