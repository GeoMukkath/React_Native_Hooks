import React, { useState } from "react";
import styled from "styled-components";
import yelp from "../screens/api/yelp";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
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
