import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';


export default function List() {
    const [placeholder, setPlaceholder] = useState([
        { key: '1', text: "yes" },
        { key: '2', text: "no" },
        { key: '3', text: "scroll bitch" },
        { key: '4', text: "scroll bitch" },
        { key: '5', text: "scroll bitch" },
        { key: '6', text: "scroll bitch" },
        { key: '7', text: "scroll bitch" },
        { key: '8', text: "scroll bitch" },
        { key: '9', text: "scroll bitch" },
        { key: '10', text: "scroll bitch" },
        { key: '11', text: "scroll bitch" },
        { key: '12', text: "scroll bitch" },
        { key: '13', text: "scroll bitch" },
        { key: '14', text: "scroll bitch" },
        { key: '15', text: "scroll bitch" }
    ])

    const pressHandler = (key) => {
        console.log(key)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={placeholder}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => pressHandler(item.key)}>
                        <Text style={styles.item}>{item.text}</Text>
                    </TouchableHighlight>

                )}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    item: {
        padding: 10,
        underlayColor: 'purple'
    }
});