import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const LoadingComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={"large"}></ActivityIndicator>
    </SafeAreaView>
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
