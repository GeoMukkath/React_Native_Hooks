import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState(" ");
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newVal) => setName(newVal)}
      />
      {name.length <= 3 ? <Text>Name must be in full</Text> : null}
    </View>
  );
};

const View = styled.View``;
const TextInput = styled.TextInput`
  height: 50px;
  border: 1px solid black;
  margin: 10px;
  font-size: 20px;
  padding: 5px;
`;

export default TextScreen;
