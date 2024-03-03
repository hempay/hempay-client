import { View, Text, Image } from "react-native";
import React from "react";
import BaseButton from "../components/BaseButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
const index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center flex flex-col items-center bg-white">
      <Image
        source={require("../assets/images/logo.png")}
        className="object-contain"
        style={{ width: wp(25) }}
        resizeMode="contain"
      />

      <View className="flex flex-col gap-2 mb-5 justify-center items-center">
        <Text className="text-lg font-semibold">Welcome to HemPay</Text>
        <Text className="text-sm text-center px-8">
          Borderless Payment Company for sending and accepting money globally.
        </Text>
      </View>

      <BaseButton
        text="Login"
        additionalStyle="my-4 font-semibold"
        onClick={() => router.push("auth/login")}
      />
      <BaseButton
        text="Create an Account"
        additionalStyle="font-semibold"
        onClick={() => router.push("auth/signup")}
      />
    </View>
  );
};

export default index;
