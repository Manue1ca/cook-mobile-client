import {observer} from "mobx-react";
import {Button, StyleSheet, Text, TextInput, View,SafeAreaView,FlatList} from "react-native";
import store from "../store/store";
import React, { useState} from 'react';

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Recepts = observer( ({navigation}) => {

    let countId = 0

    const [product, setProduct] = useState("");
    const onChangeProductHandler = (product) =>{
        setProduct(product)
    }
    const clearInputProduct = () =>{
        setProduct('')
    }

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginRight: 20
                    }}
                    placeholder="Введите продукт который у вас есть"
                    value={product}
                    onChangeText={onChangeProductHandler}
                />
                <Button
                title={'Добавить'}
                onPress={()=> {
                    store.addProduct(product)
                    clearInputProduct()
                }}
                />
            </View>
            <View style={{height:400}}>

                    <FlatList
                        data={store.allProduct}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

            </View>
            <View style={{flexDirection:'row'}}>
                <Button
                title='Очистить'
                onPress ={() => {
                    store.clearProduct()
                }}
                />
                <Button
                    title='Приготовить'
                    onPress ={() => {
                        console.log('Сейчас придумаю')
                    }}
                />
            </View>
        </View>
    );
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Recepts