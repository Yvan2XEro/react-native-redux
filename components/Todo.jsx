import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"; 

export const Todo = ({title, completed, onToggle})=>{
    return (
        <View style={styles.todoItem}>
            <View style={styles.todoItem}>
                <View style={styles.square}></View>
                <Text>{{ title }}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        opacity: 15,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#558CF6',
        opacity: 0.4,
        marginRight: 15
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#558CF6',
        borderWidth: 2,
        borderRadius: 5
    },
})