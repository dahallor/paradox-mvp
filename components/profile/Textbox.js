import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function Textbox() {
    const aboutMe = "oh boy I sure am honry all the time. I hope to find me a cute depraved little slut"
    return (
        <View style={styles.container}>
            <Text>About Me</Text>
            <Text>{aboutMe}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 1
    },
})