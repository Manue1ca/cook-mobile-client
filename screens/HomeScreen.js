import {observer} from "mobx-react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import store from "../store/store";
import React, { useState} from 'react';


const HomeScreen = observer( ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
            title={'Logon'}
            onPress={()=> {
                store.loginData(false, '')
            }}
            />
        </View>
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

export default HomeScreen