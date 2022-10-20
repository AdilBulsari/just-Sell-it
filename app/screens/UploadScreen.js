import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay={true}
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animation/lottie.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};
export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});
