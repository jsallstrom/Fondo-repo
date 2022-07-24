import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ERROR_RED } from "../constants/Colors";

const ErrorMessage = ({ message }) => {
  return (
    <Text style={styles.errorText} testID="errorText">
      {message}
    </Text>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({ errorText: { color: ERROR_RED } });
