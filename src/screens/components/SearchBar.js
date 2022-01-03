import React from "react";
import { View, Text, SearchField } from "../../../styles";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View>
      <SearchField
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
      <Feather
        name="search"
        autoCapitalize="none"
        autoCorrect={false}
        size={30}
        style={{ position: "absolute", left: 20, top: 7 }}
      />
    </View>
  );
};

export default SearchBar;
