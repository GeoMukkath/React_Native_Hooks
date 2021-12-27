import React, { useState } from "react";
import styled from "styled-components";
import SquareCounter from "./components/SquareCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_DEPTH = 20;

  return (
    <View>
      <SquareCounter
        color="Red"
        onIncrease={() => setRed(red + COLOR_DEPTH)}
        onDecrease={() => setRed(red - COLOR_DEPTH)}
      />
      <SquareCounter
        color="Green"
        onIncrease={() => setGreen(green + COLOR_DEPTH)}
        onDecrease={() => setGreen(green - COLOR_DEPTH)}
      />
      <SquareCounter
        color="Blue"
        onIncrease={() => setBlue(blue + COLOR_DEPTH)}
        onDecrease={() => setBlue(blue - COLOR_DEPTH)}
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
