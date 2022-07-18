import {observer} from "mobx-react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import store from "../store/store";
import React, { useState} from 'react';


const PersonalArea = observer( ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text>PersonalArea</Text>
            <Button
            title={'Привет'}
            onPress={()=> {

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

export default PersonalArea