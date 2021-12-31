import React from "react";
import styled from "styled-components";

const BoxScreen = () => {
  return (
    <View>
      <Text>Box Screen 1</Text>
      <Text_2>Box Screen 2</Text_2>
      <Text>Box Screen 3</Text>
    </View>
  );
};

const View = styled.View`
  border: 1px solid black;
  padding: 5px;
  height: 100;
  justify-content: space-around;
  flex-direction: row;
`;
const Text = styled.Text`
  border: 3px solid red;
  margin: 3px;
  flex: 1;
  align-self: flex-start;
`;

const Text_2 = styled.Text`
  border: 3px solid red;
  margin: 3px;
  flex: 1;
  align-self: flex-end;
`;

export default BoxScreen;
