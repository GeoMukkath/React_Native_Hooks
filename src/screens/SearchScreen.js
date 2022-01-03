import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("Test Submitted")}
      />
      <Text>{term}</Text>
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text`
  color: black;
`;

export default SearchScreen;
