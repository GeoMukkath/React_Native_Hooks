import React from "react";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components";

const ListScreen = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => {
          friend.name;
        }}
        data={employees}
        renderItem={({ item }) => {
          return (
            <Names>
              {item.name} - Age {item.age}
            </Names>
          );
        }}
      />
    </View>
  );
};

const employees = [
  { name: "Emp1", age: 25 },
  { name: "Emp2", age: 26 },
  { name: "Emp3", age: 27 },
  { name: "Emp4", age: 28 },
  { name: "Emp5", age: 29 },
];

const Names = styled.Text`
  line-height: 150px;
`;
const View = styled.View``;

export default ListScreen;
