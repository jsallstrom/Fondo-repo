import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const MealDetailsScreen = ({ route }) => {
  const { id } = route.params;

  const [error, seterror] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        `https://playground.devskills.co/api/rest/meal-roulette-app/meals/${id}`
      );
      const data = await resp.json();
      setData(data);
    } catch (error) {
      seterror(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log({ data });

  if (isLoading) return <ActivityIndicator size={"large"}></ActivityIndicator>;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  return (
    <View>
      <Text style={{ color: "white" }}>MealDetailsScreen</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  errorText: { color: "red" },
});
