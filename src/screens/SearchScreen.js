import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../screens/api/yelp";
import SearchBar from "./components/SearchBar";
import useResults from "./hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results for your search term.</Text>
    </View>
  );
};

const View = styled.View``;
const Text = styled.Text`
  color: black;
`;

export default SearchScreen;
