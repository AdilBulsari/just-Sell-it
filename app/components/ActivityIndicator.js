import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animation/lottie.json")}
      autoplay
      loop
    />
  );
};

export default ActivityIndicator;
