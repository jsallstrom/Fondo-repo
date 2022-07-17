import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorMessage = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({ errorText: { color: "red" } });
