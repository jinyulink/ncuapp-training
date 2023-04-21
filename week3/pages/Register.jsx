import React, { useState }from 'react';
import { StatusBar } from "expo-status-bar";
import { 
    Alert, Button, TextInput, Text, Image, SafeAreaView, StyleSheet, View, TouchableOpacity,
} from 'react-native';

function Register({ navigation}) {
    const [name,setname] = useState('');
    const [ID,setID] = useState('');
    const handleRegister = () => {
        if (name.trim() === '' || ID.trim() === '') { //trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。
            Alert.alert('dumb','未輸入姓名或學號');
            return ;
        }
        else{
            navigation.navigate('RegisterSuccess', {name, ID});
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setname(text)}
                    placeholder="name"
                    placeholderTextColor={"#003f5c"}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={text => setID(text)}
                    placeholder="ID"
                    placeholderTextColor={"#003f5c"}
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity
                onPress = {handleRegister}
                style={styles.RegisterBtn}>
                <Text>Register </Text>
            </TouchableOpacity>
        </SafeAreaView>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: '#389CDB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize:50,
        color:"#4863FF",
        marginBottom: 40,
    },
    inputView:{
        width:"80%",
        backgroundColor:"#B3B3B3",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:'white'
    },
    RegisterBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    RegisterText:{
    },
})

export default Register;