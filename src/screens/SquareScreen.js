import React, { useReducer } from "react";
import styled from "styled-components";
import SquareCounter from "./components/SquareCounter";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const COLOR_DEPTH = 20;
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_DEPTH })
        }
      />
      <SquareCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_DEPTH })
        }
      />
      <SquareCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_DEPTH })
        }
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text``;

export default SquareScreen;
