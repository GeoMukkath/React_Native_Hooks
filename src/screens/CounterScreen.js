import React, { useState } from "react";
import { Button } from "react-native";
import styled from "styled-components";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button title="Decrease Count" onPress={() => setCount(count + -1)} />
      <Text>Counter: {count}</Text>
    </View>
  );
};

const Text = styled.Text``;
const View = styled.View``;

export default CounterScreen;
