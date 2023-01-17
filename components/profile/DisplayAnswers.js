import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default function DisplayAnswers() {
    const [placeholder, setPlaceholder] = useState([
        { key: '1', question: "Are you gonna die alone", answer: "yes" },
        { key: '2', question: "Do you server happiness?", answer: "no" },
    ])
    return (
        <View style={styles.container}>
            <FlatList
                data={placeholder}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.item}>{item.question}: {item.answer}</Text>
                    </View>
                )} />
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