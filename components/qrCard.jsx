import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Card from "./UI/customCard";
import logo from "../assets/images/tahauru-logo.png";
import QRCode from "react-native-qrcode-svg";
import { router } from "expo-router";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useTranslation } from "react-i18next";

const qrCard = () => {
  const wallet = "this-is-tahauru-wallet-id";
  const { user } = useAuthContext();

  const {t}= useTranslation();

  const handleModal = () => {
    router.push("/qrpage");
  };

  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={handleModal}>
        <View>
          <Text className="text-slate-500 text-sm text-center font-semibold ">
            {t("Scanwallet")}
          </Text>
          <View className="w-full flex justify-center items-center">
            <QRCode
              size={200}
              value={user?.nic}
              logo={logo}
              onError={"Not a valid wallet ID"}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default qrCard;
