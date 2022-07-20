import {
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
import { API } from "../constants/API";
import ErrorMessage from "./ErrorMessage";
import LoadingComponent from "./LoadingComponent";
import Layout from "../constants/Layout";

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
      const resp = await fetch(API + `limit/${limit}/offset/${offset}`);
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
        style={
          Layout.isSmallDevice
            ? styles.mealItemContainerSmallScreen
            : styles.mealItemContainer
        }
        onPress={() =>
          navigation.navigate("MealDetailsScreen", { id: id, title: title })
        }
      >
        <Image style={styles.mealItemImage} source={{ uri: picture }}></Image>
        <Text style={styles.mealItemText}>{title}</Text>
      </Pressable>
    );
  };

  if (error) return <ErrorMessage message={error}></ErrorMessage>;

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <FlatList
            data={data}
            numColumns={Layout.isSmallDevice ? 1 : 2}
            renderItem={({ item }, index) => {
              return renderItem(item, index);
            }}
          ></FlatList>
        </>
      )}

      <Pressable
        title="Refresh"
        onPress={() => {
          const newOffset = currentOffset + currentLimit;
          fetchData(currentLimit, newOffset);
          setoffset(newOffset);
        }}
      >
        <View style={styles.refreshButton}>
          <Text style={{ textAlign: "center" }}>Refresh</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },

  refreshButton: {
    borderRadius: 100,
    width: Layout.window.height / 9,
    height: Layout.window.height / 9,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default MealSelectionView;
