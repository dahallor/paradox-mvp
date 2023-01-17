import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

//TODO: fix markers
//TODO: sync to json server
//TODO: formatting obviously
//TODO: add submit and back buttons

export default function Checklist() {
    const [checkbox, setCheckbox] = useState(
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    )
    const [marker, setMarker] = useState(null)
    const options = ['Very Important', 'Important', 'Somewhat Important', 'Not Important']
    function pressHandler(option, checkbox) {
        setMarker("")
        for (let i = 0; i < 4; i++) {
            if (option === 'Very Important') {
                setMarker("")
                if (checkbox.id == 1) {
                    setMarker("X")
                }
            }
        }

    }
    return (
        <View style={styles.container}>
            {options.map(option => (
                <View key={(option)} style={styles.line}>
                    <TouchableOpacity onPress={() => pressHandler(option, checkbox)} style={styles.checkbox}>
                        <Text style={styles.marker}>{marker}</Text>
                    </TouchableOpacity>
                    <Text>     {option}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '55%'
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'flex-start'
    },
    line: {
        flexDirection: 'row',
        backgroundColor: 'gold',
        padding: 10,
        margin: 5
    },
    marker: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})