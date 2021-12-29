import React, { useReducer } from "react";
import { Button } from "react-native";
import styled from "styled-components";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + action.payload;
    case "dec":
      return state - action.payload;
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Button
        title="Increase Count"
        onPress={() => dispatch({ type: "inc", payload: 1 })}
      />
      <Button
        title="Decrease Count"
        onPress={() => dispatch({ type: "dec", payload: 1 })}
      />
      <Text>Counter: {state}</Text>
    </View>
  );
};

const Text = styled.Text``;
const View = styled.View``;

export default CounterScreen;
