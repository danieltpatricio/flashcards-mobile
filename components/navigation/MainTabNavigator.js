import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import ListDecks from "../screens/ListDecks";
import DetailsDeck from "../screens/DetailsDeck";
import AddDeck from "../screens/AddDeck";
import AddCard from "../screens/AddCard";
import Quiz from "../screens/Quiz";
import Colors from "../../utils/constants/Colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const header = { headerMode: Platform.OS === "ios" ? "float" : "none" };

const ListDecksStack = createStackNavigator(
  {
    ListDecks,
    DetailsDeck,
    AddCard,
    Quiz
  },
  header
);

ListDecksStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  return {
    tabBarVisible,
    tabBarLabel: "Decks",
    tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons
        name={
          Platform.OS === "ios"
            ? `cards${focused ? "" : "-outline"}`
            : "cards-playing-outline"
        }
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  };
};

const AddDeckStack = createStackNavigator(
  {
    AddDeck
  },
  header
);

AddDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <MaterialIcons
      name="add"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
};

export default Platform.select({
  ios: createBottomTabNavigator({
    ListDecksStack,
    AddDeckStack
  }),
  android: createMaterialTopTabNavigator({
    ListDecksStack,
    AddDeckStack
  })
});
