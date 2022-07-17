import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealSelectionView from "../components/MealSelectionView";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={{ color: "white" }}>HomeScreen</Text>
      <MealSelectionView></MealSelectionView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
