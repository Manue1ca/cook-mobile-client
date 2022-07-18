import React, {useEffect, useState} from 'react';
import {View,Text,Button, StyleSheet, TextInput,Alert} from "react-native";
import store from "./store/store";
import {observer} from "mobx-react";
import LoginScreen from "./screens/LoginScreen";
import PersonalArea from "./screens/PersonalArea";
import ReceptsScreen from "./screens/ReceptsScreen";
import HomeScreen from "./screens/HomeScreen"
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Personal" component={PersonalArea} />
            <Drawer.Screen name="Recepts" component={ReceptsScreen} />
        </Drawer.Navigator>
    );
}
const Stack = createNativeStackNavigator();
const App = observer( ({ navigation }) => {


    return (
        <NavigationContainer>

                {store.login ? (
                    <MyDrawer/>)
                    : (
                        <Stack.Navigator>
                            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                            <Stack.Screen name='RegistrationScreen' component={RegistrationScreen}/>
                        </Stack.Navigator>)}
        </NavigationContainer>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});




export default App;