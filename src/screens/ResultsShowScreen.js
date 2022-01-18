import React from "react";
import styled from "styled-components";
import yelp from "./api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  let i = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    response.data;
  };
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text``;

export default ResultsShowScreen;
