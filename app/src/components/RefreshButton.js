import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Layout from "../constants/Layout";
import { NORMAL_WHITE, REFRESH_BLUE, SHADOW_BLACK } from "../constants/Colors";

const RefreshButton = ({ onPress, title }) => {
  return (
    <Pressable
      title="Refresh"
      onPress={() => onPress()}
      style={styles.refreshButton}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

export default RefreshButton;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    color: NORMAL_WHITE,
  },
  refreshButton: {
    borderRadius: 100,
    width: Layout.window.height / 9,
    height: Layout.window.height / 9,

    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: REFRESH_BLUE,
    shadowColor: SHADOW_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
