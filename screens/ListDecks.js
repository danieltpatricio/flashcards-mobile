import React from "react";
import { Text, FlatList } from "react-native";
import styled from "styled-components/native";

const ListView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: stretch;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 40px;
  align-items: center;
  border-style: solid;
  border-color: gray;
  border-width: 0.5;
  font-weight: bold;
`;

export default props => {
  return (
    <ListView>
      <FlatList
        data={[
          { key: "Udacicards", numCards: 3 },
          { key: "New deck", numCards: 3 },
          { key: "New deck 2", numCards: 0 }
        ]}
        renderItem={({ item }) => (
          <Button>
            <Text>{item.key}</Text>
            <Text>{item.numCards} cards</Text>
          </Button>
        )}
      />
    </ListView>
  );
};
