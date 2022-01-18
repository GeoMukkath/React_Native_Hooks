import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";
import yelp from "./api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  let id = navigation.getParam("id");
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={{ height: 200, width: 200 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text``;
const Image = styled.Image``;

export default ResultsShowScreen;
