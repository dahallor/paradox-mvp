import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

export default function Textbox(props) {
    console.log("Textbox")
    console.log(props)
    const navigation = useNavigation()
    const [value, onChangeText] = useState(null)


    function proceed() {
        //inset statment to write to JSON page here
        navigation.navigate(props.nextPage)
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <TouchableOpacity
                style={styles.button}
                onChangeText={text => onChangeText(text)}
                value={value}
                onPress={() => proceed()}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        backgroundColor: 'gray',
        width: '100%'
    },
    input: {
        borderWidth: 1,
        width: '75%',
        alignItems: 'flex-start'
    },
    button: {
        borderWidth: 1,
        width: '10%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})