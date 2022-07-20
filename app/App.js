import { StatusBar } from "expo-status-bar";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";

const Stack = createStackNavigator();

// J. Sällström

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
