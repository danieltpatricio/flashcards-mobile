import React from "react";
import { Platform, Button } from "react-native";
import styled from "styled-components";

const ViewButton = styled.TouchableHighlight`
  background-color: ${props => props.color};
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  width: 100%;
`;

const Text = styled.Text`
  color: ${props => props.colorText};
`;

export default ({
  color = "white",
  colorText = "white",
  title,
  onPress,
  ...props
}) =>
  Platform.select({
    ios: (
      <ViewButton
        color={color}
        activeOpacity={0.005}
        onPress={onPress}
        {...props}
      >
        <Text colorText={colorText}>{title}</Text>
      </ViewButton>
    ),
    android: <Button color={color} title={title} onPress={onPress} {...props} />
  });
