import React, { useState } from "react";
import styled from "styled-components";
import SquareCounter from "./components/SquareCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_DEPTH = 20;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
        return;

      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
        return;

      case "blue":
        if (blue + change > 255 || blue + change < 0) {
          return;
        } else {
          setBlue(blue + change);
        }
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_DEPTH)}
        onDecrease={() => setColor("red", -1 * COLOR_DEPTH)}
      />
      <SquareCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_DEPTH)}
        onDecrease={() => setColor("green", -1 * COLOR_DEPTH)}
      />
      <SquareCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_DEPTH)}
        onDecrease={() => setColor("blue", -1 * COLOR_DEPTH)}
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
