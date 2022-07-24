import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import { API } from "../constants/API";
import ErrorMessage from "./ErrorMessage";

import Layout from "../constants/Layout";
import RefreshButton from "./RefreshButton";
import FoodItem from "./FoodItem";

const MealSelectionView = ({ navigation }) => {
  const [error, seterror] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const [currentLimit, setcurrentLimit] = useState(4);

  const [currentOffset, setoffset] = useState(0);

  useEffect(() => {
    fetchData(currentLimit, currentOffset);
  }, []);

  const fetchData = async (limit, offset) => {
    try {
      setIsLoading(true);
      const resp = await fetch(API + `limit/${limit}/offset/${offset}`);

      const data = await resp.json();

      if (data.meal_roulette_app_meals_aggregate.nodes.length === 0) {
        throw new Error("Nothing was returned from API!");
      }
      setData(data.meal_roulette_app_meals_aggregate.nodes);
      seterror(null);
    } catch (error) {
      seterror(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ id, title, picture }, index) => {
    return (
      <FoodItem
        key={index}
        title={title}
        picture={picture}
        onPress={() =>
          navigation.navigate("MealDetailsScreen", { id: id, title: title })
        }
        isSmallDevice={Layout.isSmallDevice}
      ></FoodItem>
    );
  };

  return (
    <View style={styles.container}>
      {error && <ErrorMessage message={error}></ErrorMessage>}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          data={data}
          numColumns={Layout.isSmallDevice ? 1 : 2}
          renderItem={({ item }, index) => {
            return renderItem(item, index);
          }}
          testID={"food-flatlist"}
        ></FlatList>
      )}

      <RefreshButton
        onPress={() => {
          const newOffset = currentOffset + currentLimit;
          fetchData(currentLimit, newOffset);
          setoffset(newOffset);
        }}
        title={"Refresh"}
      ></RefreshButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealSelectionView;
