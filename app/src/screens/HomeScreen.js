import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MealSelectionView from "../components/MealSelectionView";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <MealSelectionView navigation={navigation}></MealSelectionView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
