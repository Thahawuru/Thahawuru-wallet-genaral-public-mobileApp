import { Text, View, ScrollView } from "react-native";
import CustomCard from "../../../components/UI/customCard";
import { SafeAreaView } from "react-native-safe-area-context";
import LanguageSwitcher from "@/components/languageSwitcher";
import Logout from "@/components/logout";

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-2 mx-1 bg-white flex-col gap-4 justify-evenly   ">
          <View className="flex my-1 flex-row justify-between">
            <Text className="text-md   font-bold">Language</Text>
            <LanguageSwitcher></LanguageSwitcher>
          </View>
          <View className="flex my-1 flex-row justify-between">
            <Logout></Logout>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
