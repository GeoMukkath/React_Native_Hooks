import React, { useState } from "react";
import styled from "styled-components";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View>
      <Button
        title="Add color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <View style={{ width: 100, height: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

export default ColorScreen;
