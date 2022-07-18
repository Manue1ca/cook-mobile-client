import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, TextInput} from "react-native-web";
import React, { useState } from "react";
import axios from "axios";


const server = 'http://192.168.0.8:1337'



export default function AppOld() {

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    async function logining() {
        try {
            const res = await axios.post(`${server}/api/auth/local`, {
                'identifier':login,
                'password':pass,
            });
            console.log(res)
            if (res.status === 200){
                alert('Вы вошли')
            }else if(res.status === 400){
                alert('Неправельный логин или пароль')
            }else {
                alert('Ошибка сервера')
            }
        }
        catch (e) {
            console.log(e)
        }

    }



    const onChangeLoginHandler = (login) => {
        setLogin(login);
    };

    const onChangePassHandler = (pass) => {
        setPass(pass);
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
        <Button
            title="Войти"
            onPress={() => logining()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
