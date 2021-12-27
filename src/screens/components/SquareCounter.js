import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

const SquareCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Heading>{color}</Heading>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Increase ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const View = styled.View``;
const Heading = styled.Text`
  font-size: 20px;
`;
const Text = styled.Text``;

export default SquareCounter;
