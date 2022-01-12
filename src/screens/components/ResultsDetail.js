import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image source={{ uri: result.image_url }} />
      <Name>{result.name}</Name>
      <Details>
        <Rating>{result.rating} Stars,</Rating>
        <ReviewCount> {result.review_count} Reviews</ReviewCount>
      </Details>
    </View>
  );
};

const Image = styled.Image`
  width: 250px;
  height: 200px;
  border-radius: 7px;
`;

const Name = styled.Text`
  font-size: 16px;
`;

const Rating = styled.Text`
  font-size: 12px;
  font-weight: 200;
  margin-right: 20px;
`;

const ReviewCount = styled.Text`
  font-size: 12px;
  font-weight: 200;
  margin-left: 10px;
`;

const Details = styled.Text`
  flex: 1;
`;

export default ResultsDetail;
