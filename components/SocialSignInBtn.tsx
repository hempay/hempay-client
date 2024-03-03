import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { ButtonType } from "../utils/types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const SocialSignInBtn = ({
  text,
  type,
  additionalStyle,
}: {
  text: string;
  type: ButtonType.Apple | ButtonType.Google;
  additionalStyle?: string;
}) => {
  return (
    <TouchableOpacity
      className={`w-full capitalize flex-row flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${additionalStyle}`}
    >
      {type == ButtonType.Google ? (
        <Image
          resizeMode="contain"
          source={require(`../assets/images/googleIcon.png`)}
          alt="G"
          className="mr-4 h-5 w-5"
        />
      ) : type === ButtonType.Apple ? (
        <Image
          resizeMode="contain"
          source={require(`../assets/images/appleIcon.png`)}
          alt="A"
          className="mr-4 h-6 w-6"
        />
      ) : (
        ""
      )}

      {/* <Text className="h-6 w-6 mr-2">Continue with Google</Text> */}
      <Text className="font-bold text-base text-[#323232]">{text}</Text>
    </TouchableOpacity>
  );
};

export default SocialSignInBtn;
