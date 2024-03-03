import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BaseButton from "../../components/BaseButton";
import SocialSignInBtn from "../../components/SocialSignInBtn";
import { ButtonType } from "../../utils/types";
import { useRouter } from "expo-router";
const login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      className="flex-1 bg-white flex space-y-5 px-6"
      edges={["top"]}
    >
      <View className="flex flex-1 border-red-600 flex-col items-center">
        <Text className="text-2xl capitalize font-semibold self-center mt-8 mb-10 text-[#414141]">
          login
        </Text>
        <View className="mt-20 flex flex-col gap-2 w-full border-green-600">
          <Text className="text-lg capitalize font-semibold text-[#414141]">
            Email
          </Text>
          <TextInput
            className="border-b-[1px] border-neutral-500 pb-3 text-base mb-10 text-[#414141]"
            placeholder="username@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View className="relative gap-1 flex flex-col">
            <Text className="text-lg capitalize font-semibold my-2 text-[#414141]">
              Password
            </Text>
            <TextInput
              className="border-b-[1px] border-neutral-500 pb-3 relative text-base text-[#414141]"
              placeholder="123456789"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Image
              source={require("../../assets/images/lockIcon.png")}
              className="absolute right-2 bottom-9 object-contain"
              resizeMode="contain"
            />
            <Text className="text-base capitalize font-semibold text-[#414141] self-end">
              Forgot Password?
            </Text>
          </View>
        </View>
        <View className="flex justify-center items-center w-full">
          <BaseButton
            text="Login"
            additionalStyle="mt-10 mb-6 self-center font-semibold"
            onClick={() => router.push("auth/login")}
          />
          <Text className="text-lg font-semibold">or</Text>
          <View className="w-full mt-3">
            <SocialSignInBtn
              text="Continue with Google"
              type={ButtonType.Google}
              additionalStyle="mb-4"
            />
            <SocialSignInBtn
              text="Continue with Apple"
              type={ButtonType.Apple}
            />
            <Text className="self-center mt-4">
              Don't have an account?{" "}
              <Text
                className="text-[#4A2A13] font-bold"
                onPress={() => router.push("auth/signup")}
              >
                Signup
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
