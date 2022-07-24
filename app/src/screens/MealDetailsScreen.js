import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import LoadingComponent from "../components/LoadingComponent";
import { API } from "../constants/API";

const MealDetailsScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  const [error, seterror] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    fetchData();

    navigation.setOptions({ headerTitle: title });
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(API + id);
      const data = await resp.json();
      setData(data.meal_roulette_app_meals_by_pk);
    } catch (error) {
      seterror(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) return <ErrorMessage message={error}></ErrorMessage>;
  if (isLoading) return <LoadingComponent />;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image style={styles.image} source={{ uri: data?.picture }}></Image>
      <Text style={styles.title}>{data?.title}</Text>

      <Text style={styles.description}>{data?.description}</Text>

      <Text style={styles.ingredientTitle}>Ingredients</Text>

      <Text style={styles.ingredients}>{data?.ingredients}</Text>
    </ScrollView>
  );
};

export default MealDetailsScreen;

import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 10,
  },

  image: {
    width: "100%",
    height: Layout.window.height / 2,
    borderRadius: 20,
  },
  title: {
    marginTop: 10,

    fontSize: 20,
  },

  description: {
    marginVertical: 20,
  },

  ingredientTitle: {
    marginVertical: 10,
    fontStyle: "italic",
  },

  ingredients: {
    marginVertical: 20,
  },
});
