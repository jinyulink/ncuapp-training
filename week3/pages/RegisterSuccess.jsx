import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

function RegisterSuccess ({route,navigation}){
    const {name,ID} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Success</Text>
            <Text>姓名: {name}</Text>
            <Text>學號: {ID}</Text>
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
});

export default RegisterSuccess;