import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BaseButton from "../../components/BaseButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView
      className="flex-1 bg-white flex space-y-5 px-6"
      edges={["top"]}
    >
      <View className="flex flex-1 relative border-red-600 flex-col items-center">
        <Text className="text-2xl capitalize font-semibold self-center mt-8 mb-16 text-[#414141]">
          Create Account
        </Text>
        <TouchableOpacity
          onPress={() => router.push("auth/login")}
          className="absolute top-14 left-0"
        >
          <Image
            source={require("../../assets/images/backIcon.png")}
            resizeMode="contain"
            style={{ width: wp(3), height: hp(3) }}
          />
        </TouchableOpacity>

        <View className="flex flex-col gap-2 w-full border-green-600">
          <Text className="text-lg capitalize font-semibold text-[#414141]">
            Email
          </Text>
          <TextInput
            className="border-b-[1px] border-neutral-500 pb-3 text-base mb-10 text-[#414141]"
            placeholder="username@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className="flex justify-center items-center w-full">
          <BaseButton
            text="Create Account"
            additionalStyle="mt-1 mb-6 self-center font-semibold"
          />
          <Text className="text-sm text-center">
            <Text className="font-semibold">Note:</Text> You will receive a
            confirmation code to the email you provided.
          </Text>

          <Text className="self-center mt-4">
            Already have an account?{"  "}
            <Text
              className="text-[#4A2A13] font-bold ml-2"
              onPress={() => router.push("auth/login")}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
