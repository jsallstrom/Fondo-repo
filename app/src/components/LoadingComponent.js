import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} testID="loader"></ActivityIndicator>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
