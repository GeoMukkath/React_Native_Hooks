import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Native Application</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Component")}
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go to Images"
        onPress={() => navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
