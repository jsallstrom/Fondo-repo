import {
  ActivityIndicator,
  Image,
  SafeAreaView,
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
      seterror(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log({ data });

  if (error) return <ErrorMessage message={error}></ErrorMessage>;
  if (isLoading) return <LoadingComponent />;

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image style={styles.image} source={{ uri: data?.picture }}></Image>
        <Text style={styles.title}>{data?.title}</Text>

        <Text style={styles.description}>{data?.description}</Text>

        <Text style={styles.ingredientTitle}>Ingredients</Text>

        <Text style={styles.ingredients}>{data?.ingredients}</Text>
      </ScrollView>
    </SafeAreaView>
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
    color: "white",
    fontSize: 20,
  },

  description: {
    marginVertical: 20,
    color: "white",
  },

  ingredientTitle: {
    marginVertical: 10,
    color: "white",
    fontStyle: "italic",
  },

  ingredients: {
    marginVertical: 20,
    color: "white",
  },
});
