import React, { useState, useEffect } from "react";
import styled from "styled-components";
import yelp from "../screens/api/yelp";
import SearchBar from "./components/SearchBar";
import useResults from "./hooks/useResults";
import ResultsList from "./components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList result={filterResults("$")} title="Cost Effective" />
        <ResultsList result={filterResults("$$")} title="Bit Pricier" />
        <ResultsList result={filterResults("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const View = styled.View``;
const Text = styled.Text`
  color: black;
`;

export default SearchScreen;
