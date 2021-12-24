import React from "react";
import styled from "styled-components";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imgSrc} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.imgScore}</Text>
    </View>
  );
};

const Text = styled.Text``;

const View = styled.View``;

const Image = styled.Image``;

export default ImageDetail;
