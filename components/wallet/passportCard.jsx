import { View, Text, Image } from "react-native";
import React from "react";
import Card from "../UI/customCard";
import { useCards } from "../../api/useCards";
import userphoto from "../../assets/images/userphoto.jpg";

const passportCard = () => {
  const { getPassport } = useCards();
  const passport = getPassport();

  return (
    <Card color={"#fff"}>
      <View className="flex flex-row justify-between items-center ">
        <View>
          <Text className="text-lg font-semibold">Passport</Text>
          <Text>no : {passport.no}</Text>
          <Text>name : {passport.name}</Text>
          <Text>name : {passport.dob}</Text>
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
    </Card>
  );
};

export default passportCard;
