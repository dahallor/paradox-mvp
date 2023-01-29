import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

export default function Textbox(props) {
    const navigation = useNavigation()
    const [value, onChangeText] = useState(null)

    function setValues(text) {
        onChangeText(text)
        props.changeSelection(text)
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setValues(text)}
                value={value} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        backgroundColor: 'gray',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        width: '75%',
    },
})