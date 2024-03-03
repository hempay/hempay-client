import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  text: string;
  additionalStyle?: string;
  onClick?: () => void;
};
const BaseButton: FC<Props> = ({ text, additionalStyle, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      //   style={{ height: hp(7), width: wp(80) }}
      style={{
        // backgroundImage: require("../assets/images/buttonDesign.png"),
        width: wp(80),
        height: hp(7),
      }}
      className={`relative rounded-lg bg-gradient-to-r from-indigo-500 text-white font-medium shadow-sm hover:shadow-md transition duration-200 ${additionalStyle}`}
    >
      <LinearGradient
        colors={["#914617", "#4A2A13"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex w-full h-full justify-center items-center rounded-lg"
        style={{
          backgroundImage: require("../assets/images/buttonDesign.png"),
        }}
      >
        <Image
          source={require("../assets/images/buttonDesign.png")}
          className="border-2 border-red-500 w-full h-full absolute"
        />
        <Text
          style={{ fontSize: hp(2) }}
          className="text-white font-bold tracking-widest"
        >
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BaseButton;
