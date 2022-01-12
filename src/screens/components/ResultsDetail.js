import React from "react";
import styled from "styled-components";
import { View, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultsDetail;
