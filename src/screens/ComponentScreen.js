import React from "react";
import styled from "styled-components";
import { View } from "react-native";

const ComponentScreen = () => {
  const name = "Geo";
  return (
    <View>
      <Text>Get started with React Native.</Text>
      <Name>My name is {name}</Name>
    </View>
  );
};

const Text = styled.Text`
  font-size: 45px;
`;

const Name = styled.Text`
  font-size: 20px;
`;

export default ComponentScreen;
