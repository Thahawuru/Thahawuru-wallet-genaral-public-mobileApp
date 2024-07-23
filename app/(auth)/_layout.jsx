import React from "react";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="authorize" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" backgroundColor={"#001d3d"} />
    </>
  );
};
export default AuthLayout;
