import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import ResultsDetail from "./ResultsDetail";
import { TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const ResulstsList = ({ title, result, navigation }) => {
  return (
    <View>
      <Title>{title}</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResulstShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResulstsList);
