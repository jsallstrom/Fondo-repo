import { StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";

import Layout from "../constants/Layout";

const FoodItem = ({ title, picture, onPress, isSmallDevice }) => {
  // will use id to navigate to MealDetailsScreen for specific Meal

  return (
    <Pressable
      style={
        isSmallDevice
          ? styles.mealItemContainerSmallScreen
          : styles.mealItemContainer
      }
      onPress={() => onPress()}
      testID={"food-item"}
    >
      <Image style={styles.mealItemImage} source={{ uri: picture }}></Image>
      <Text style={styles.mealItemText}>{title}</Text>
    </Pressable>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    padding: 10,
    width: "50%",
    height: Layout.window.height / 4,
    marginBottom: 100,
  },

  mealItemContainerSmallScreen: {
    padding: 10,
    width: "100%",
    height: Layout.window.height / 3,
    marginBottom: 50,
  },

  mealItemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  mealItemText: {
    textAlign: "center",
    marginTop: 30,
  },
});
