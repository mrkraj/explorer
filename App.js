import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';
import { Account } from './screens'
import Home from './screens/home/Home';
import WebViewComponent from './screens/home/WebViewComponent';
import Welcome from './screens/welcome/Welcome';
import Tabs from './navigation/tabs';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
      return null;
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Welcome'}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Welcome" component={Tabs} />
                <Stack.Screen name="WebViewComponent" component= {WebViewComponent} />
                <Stack.Screen name="Account" component= {Account} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default App;