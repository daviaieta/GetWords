import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Word from "./word/index";
import CreateWord from "./word/create";
import ListWords from "./word/list";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1e1e1e",
          borderTopColor: "#333",
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Word") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "New Word") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Words DB") {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ff6347",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Word"
        component={Word}
        options={{
          tabBarLabel: "Word of the Day",
        }}
      />
      <Tab.Screen
        name="Words DB"
        component={ListWords}
        options={{
          tabBarLabel: "Words DB",
        }}
      />
      <Tab.Screen
        name="New Word"
        component={CreateWord}
        options={{
          tabBarLabel: "Add New Word",
        }}
      />
    </Tab.Navigator>
  );
}
