import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import ListDecks from "../screens/ListDecks";
import AddDeck from "../screens/AddDeck";
import SettingsScreen from "../screens/SettingsScreen";

const ListDecksStack = createStackNavigator({
  Cards: ListDecks
});

ListDecksStack.navigationOptions = {
  tabBarLabel: "Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `cards${focused ? "" : "-outline"}`
          : "cards-playing-outline"
      }
    />
  )
};

const AddDeckStack = createStackNavigator({
  Links: AddDeck
});

AddDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "link" : "link"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "link" : "link"}
    />
  )
};

export default createBottomTabNavigator({
  ListDecksStack,
  AddDeckStack,
  SettingsStack
});
