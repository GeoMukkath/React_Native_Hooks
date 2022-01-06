import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";

const ResulstsList = ({ title, result }) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        horizontal
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const Title = styled.Text`
  font-weight: bold;
  font-size: 19px;
`;

const Text = styled.Text`
  color: black;
`;
const View = styled.View``;

export default ResulstsList;
