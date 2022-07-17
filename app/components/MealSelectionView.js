import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const MealSelectionView = () => {
  const navigation = useNavigation();

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
      const resp = await fetch(
        `https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/${limit}/offset/${offset}`
      );
      const data = await resp.json();
      setData(data.meal_roulette_app_meals_aggregate.nodes);
    } catch (error) {
      seterror(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ id, title, picture }, index) => {
    // will use id to navigate to MealDetailsScreen for specific Meal
    console.log({ title });

    return (
      <Pressable
        key={index}
        style={styles.mealItemContainer}
        // TODO: make height more dynamic
        onPress={() => navigation.navigate("MealDetailsScreen", { id: id })}
      >
        <Image style={styles.mealItemImage} source={{ uri: picture }}></Image>
        <Text style={styles.mealItemText}>{title}</Text>
      </Pressable>
    );
  };

  if (isLoading) return <ActivityIndicator size={"large"}></ActivityIndicator>;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }, index) => {
          return renderItem(item, index);
        }}
      ></FlatList>
      <Button
        title="Refresh"
        onPress={() => {
          const newOffset = currentOffset + currentLimit;
          fetchData(currentLimit, newOffset);
          setoffset(newOffset);
        }}
      ></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  errorText: { color: "red" },

  mealItemContainer: {
    padding: 10,
    width: "50%",
    height: 150,
    marginBottom: 100,
  },
  mealItemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  mealItemText: {
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
});

export default MealSelectionView;
