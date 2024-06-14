import { View, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";

const formfield = ({ label, placeholder, styles }) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <View
        className={`border-2 my-1 border-slate-300 rounded-md p-2 w-full h-[70px] flex justify-center items-start ${styles?.container} `}
      >
        <Text
          className={` ${
            focused ? "text-xs" : "hidden"
          } text-slate-600  transition-all duration-[2000ms] translate-y-1 ${
            styles?.label
          }`}
        >
          {label}
        </Text>
        <TextInput
          className={` text-lg  h-full w-full m-0 p-0 transition-all duration-[2000ms] ${styles?.label}`}
          placeholder={`${focused ? "" : placeholder}`}
          onFocus={() => setFocused(true)}
          // onEndEditing={() => setFocused(false)}
          placeholderTextColor="slategray"
        />
      </View>
    </>
  );
};

export default formfield;
