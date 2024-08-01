import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import Card from "../UI/customCard";
import { useCards } from "../../api/useCards";
import userphoto from "../../assets/images/userphoto.jpg";
import Tag from "../itemTag";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const passportCard = ({license}) => {
  // const { getDrivingLicence } = useCards();
  const [show, setShow] = useState(false);
  // const license = getDrivingLicence();

  const {t}=useTranslation();

  return (
    <Card color={"#fff"}>
      <TouchableWithoutFeedback onPress={() => setShow((show) => !show)}>
        <View className="flex flex-row justify-between items-center ">
          <View>
            <Text className="text-lg font-semibold">{t("DringLicense")}</Text>
            {!show && (
              <Text className="text-md font-semibold">
                {t("licenseNo")} : {license?.licenseNumber}
              </Text>
            )}
            {!show && (
              <Text className="text-xs font-thin">{t("details")}</Text>
            )}

            {show && (
              <View>
                <Tag title={t("No")}> {license?.licenseNumber}</Tag>
                <Tag title={t("name")}> {license?.name}</Tag>
                <Tag title={t("DOB")}> {"2000-07-21"}</Tag>
                <Tag title={t("DOI")}> {"2021-01-10"}</Tag>
                <Tag title={t("DOE")}> {"2031-01-10"}</Tag>
                <Tag title={t("Blood")}> {"A+"}</Tag>
                {license?.restrictions && (
                  <Tag title={t("restrictions")}>
                    <Ionicons size={24} name="glasses-outline"></Ionicons>
                  </Tag>
                )}
                <Tag title={t("vehicleC")}>
                  {" "}
                  {license?.categories?.join(", ")}
                </Tag>
              </View>
            )}
          </View>
          <View>
            <Image
              source={userphoto}
              resizeMode="contain"
              className="h-20 w-20"
              style={{ borderRadius: 20 }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default passportCard;
