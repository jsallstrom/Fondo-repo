import {
  ActivityIndicator,
  Button,
  FlatList,
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

  useEffect(() => {
    fetchData(4, 4);
  }, []);

  const fetchData = async (offset, limit) => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        `https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/4`
      );
      const data = await resp.json();
      setData(data);
    } catch (error) {
      seterror(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = (id, title, picture) => {};

  console.log("data: ", data);

  if (isLoading) return <ActivityIndicator size={"large"}></ActivityIndicator>;
  if (error) return <Text style={{ color: "red" }}>{error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>MealSelectionView</Text>

      <Button title="Refresh" onPress={() => console.log("Clicked!")}></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealSelectionView;
