import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import userphoto from "../../assets/images/userphoto.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import Tag from "../itemTag";
import { useTranslation } from "react-i18next";

const nicCard = ({nic}) => {
  const [show, setShow] = useState(false);


  const {t} = useTranslation();


  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center gap-1 w-full">
          <View className="flex-[3_1_0%] flex justify-start items-start">
            <Text className="text-lg font-semibold">
              {t("NIC")}
            </Text>
            {!show  && <Text className="text-md font-semibold">{t("nic")}{nic?.identityNumber}</Text>}
            {!show  && <Text className="text-xs font-thin">{t("details")}</Text>}

            {show && (
              <View>
                <Tag title={t("nic2")}> {nic?.identityNumber}</Tag>
                <Tag title={t("name")}> {nic?.name}</Tag>
                {/* <Tag title={t("email")}> {nic?.email}</Tag> */}
                <Tag title={t("sex")}> {"male"}</Tag>
                <Tag title={t("DOB")}> {"2001-06-25"}</Tag>
                <Tag title={t("address")}> {nic?.livingAddress}</Tag>
                <Tag title={t("placeOfBirth")}> {nic?.birthPlace}</Tag>
                <Tag title={t("DOI")}> {"2010-07-21"}</Tag>
              </View>
            )}
          </View>
          <View className="relative flex-1 w-full flex items-end justify-end">
            <Image
              source={userphoto}
              resizeMode="contain"
              className="h-20 w-20"
              style={{ borderRadius: 20 }}
            />
            <View
              className=" w-5
            h-5 "
            >
              {/* {nic.sex === "male" && (
                <MaterialIcons size={24} name="boy"></MaterialIcons>
              )} */}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default nicCard;
