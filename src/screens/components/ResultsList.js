import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";

const ResulstsList = ({ title, result }) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
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
