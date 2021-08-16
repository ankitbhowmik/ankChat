import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChatScreen from "./Chat/Chat";
import CallScreen from "./Call/Call";
import StatusScreen from "./Status/Status";

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: "#128C7E"
    },
    tabBarIndicatorStyle: {
        height: 3,
        backgroundColor: "#fff",
    },
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "#074E54",
    tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: "bold"
    },
}

const Main = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Chat"
            screenOptions={screenOptions}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Status" component={StatusScreen} />
            <Tab.Screen name="Call" component={CallScreen} />
        </Tab.Navigator>
    )
}

export default Main
