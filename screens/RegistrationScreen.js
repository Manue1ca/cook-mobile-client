import {observer} from "mobx-react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import store from "../store/store";
import React, { useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const RegistrationScreen = observer( ({ navigation }) => {

    const [regLogin, setRegLogin] = useState("");
    const [regPass, setRegPass] = useState("");
    const [email,setEmail] =useState("")

    const onChangeLoginHandler = (login) => {
        setRegLogin(login)
    };

    const onChangePassHandler = (pass) => {
        setRegPass(pass)
    };
    const onChangeEmailHandler = (email)=>{
        setEmail(email)
    }

    return (

        <View style={styles.container}>
            <Text>Логин</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                placeholder="Логин"
                value={regLogin}
                 onChangeText={onChangeLoginHandler}
            />
            <Text>E-mail</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                placeholder="E-mail"
                value={email}
               onChangeText={onChangeEmailHandler}
            />
            <Text>Пароль</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Введите пароль"
                value={regPass}
                onChangeText={onChangePassHandler}
            />
            <Button
                title="Зарегистроваться"
                onPress={() => {

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

export default RegistrationScreen