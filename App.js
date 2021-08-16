import React from 'react';
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/screen/Main/Main';
import SettingScreen from './src/screen/Setting/Setting';
import RightHeader from './src/components/RightHeader/RightHeader';

import store from './src/redux';
import MessageScreen from './src/screen/Message/Message';

const screenOptions = {
	headerHideShadow: true,
	headerStyle: {
		shadowColor: "transparent",
		backgroundColor: "#128C7E",
	},
	headerTintColor: "#fff",
	headerTitleStyle: {
		fontWeight: "bold",
	}
}

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<Provider store={store}>
			<StatusBar backgroundColor="#075E54" animated />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Main"
					screenOptions={screenOptions}
				>
					<Stack.Screen name="Main" component={Main} options={{ title: "AnkChat", headerRight: RightHeader, headerShadowVisible: false }} />
					<Stack.Screen name="Settings" component={SettingScreen} />
					<Stack.Screen name="Message" component={MessageScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
