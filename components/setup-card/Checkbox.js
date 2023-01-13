import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Checklist() {
    const [checkbox, setCheckbox] = useState(null)
    const options = ['Very Important', 'Important', 'Somewhat Important', 'Not Important']
    function pressHandler() {
        const hi = 'hi'
    }
    return (
        <View style={styles.container}>
            {options.map(option => (
                <View key={(option)} style={styles.line}>
                    <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
                    <Text>{option}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: 'black'
    }
})