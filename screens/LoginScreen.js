import {observer} from "mobx-react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import store from "../store/store";
import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = observer( ({navigation}) => {


    const [login, setLogin] = useState("Manue1ca");
    const [pass, setPass] = useState("89145091779Dn");

    const onChangeLoginHandler = (login) => {
        setLogin(login)
    };

    const onChangePassHandler = (pass) => {
        setPass(pass)
    };

    return (
        <View style={styles.container}>
            <Text>Логин</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                }}
                placeholder="Введите логин"
                value={login}
                onChangeText={onChangeLoginHandler}
            />
            <Text>Пароль</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                placeholder="Введите пароль"
                value={pass}
                onChangeText={onChangePassHandler}
            />
            <Text>{store.loginError}</Text>
            <Button
                title="Войти"
                onPress={() => {
                    store.getLogining(login,pass)
                }}
            />
            <Text> </Text>
            <Button
                title="Зарегистрироваться"
                onPress={() => navigation.navigate('RegistrationScreen')}
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

export default LoginScreen