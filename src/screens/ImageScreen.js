import React from "react";
import styled from "styled-components";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imgSrc={require("../../assets/forest.jpg")}
        imgScore={5}
      />
      <ImageDetail
        title="Beach"
        imgSrc={require("../../assets/beach.jpg")}
        imgScore={8}
      />
      <ImageDetail
        title="Mountain"
        imgSrc={require("../../assets/mountain.jpg")}
        imgScore={9}
      />
    </View>
  );
};

const Text = styled.Text``;

const View = styled.View``;

export default ImageScreen;
