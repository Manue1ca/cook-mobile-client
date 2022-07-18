import axios from "axios";
import {makeAutoObservable, runInAction} from "mobx";
import AsyncStorage from 'react-native';


const server = 'http://192.168.0.8:1337'


class Store {
    constructor() {
        makeAutoObservable(this)
    }

    //login авторизация
    login = false
    loginError = ''

    loginData(res,error){
        this.login = res
        this.loginError = error
    }

    getLogining(identifier,pass){
        axios.post(`${server}/api/auth/local`, {
            'identifier':identifier,
            'password':pass,
        }).then((response) => {
            this.loginData(true,'')
            // this.storeJWT(response.data.jwt)
            // this.checkAuthJWT()
       }, (error) => {
           if (error.response){
               this.loginData(false,'Неверный логин или пароль!')
           }else if(error.request){
               this.loginData(false,'Ошибка сервера!')
           }
       })
    }

    //JWT запись ключа и просмотр ключа
    // async storeJWT(value) {
    //     await AsyncStorage.setItem('@jwt', value)
    // }
    //
    // async checkAuthJWT() {
    //     const jwt = await AsyncStorage.getItem('@jwt')
    // }


    //product
    countId = 0
    allProduct = []

    addCount (){
        this.countId ++
    }

    clearProduct(){
        this.allProduct = []
    }

    addProduct(item){
        this.addCount()
        this.allProduct.push({id:this.countId,title:item})
        console.log('Список продуктов:' + JSON.stringify(this.allProduct))
    }
}


export default new Store()