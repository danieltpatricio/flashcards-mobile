import React from "react";
import { Text } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import styled from "styled-components/native";

const NewDeckView = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  flex: 1;
  padding: 40px;
  align-items: center;
  font-size: 50px;
`;

export default props => (
  <NewDeckView>
    <Title>What is the title of yout new deck?</Title>
  </NewDeckView>
);
