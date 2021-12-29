import React, { useReducer } from "react";
import styled from "styled-components";
import SquareCounter from "./components/SquareCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
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
          dispatch({ type: "change_red", payload: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_DEPTH })
        }
      />
      <SquareCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_DEPTH })
        }
      />
      <SquareCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_DEPTH })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_DEPTH })
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
