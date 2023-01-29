import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';


export default function List(props) {
    const [selectedButton, setSelectedButton] = useState(null)

    if (props.data.length === 1) {
        props.data.key = 1
    }

    function doStuff(item) {
        toggleColor(item)
        sendInfoToParent(item)

    }

    function toggleColor(item) {
        setSelectedButton(item.key)
    }

    function sendInfoToParent(item) {
        props.changeSelection(item.text)
        props.getDevComment(item.devComments)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={({ item }) => (
                    <>
                        {item.key === selectedButton ?
                            <TouchableHighlight style={styles.selectedButton} underlayColor='purple' onPress={() => doStuff(item)} >
                                <Text style={styles.item}>{item.text}</Text>
                            </TouchableHighlight>
                            :
                            <TouchableHighlight style={styles.button} underlayColor='purple' onPress={() => doStuff(item)} >
                                <Text style={styles.item}>{item.text}</Text>
                            </TouchableHighlight>
                        }
                    </>
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
    },
    button: {
        backgroundColor: 'pink',
        borderWidth: 1,
        margin: 5
    },
    selectedButton: {
        backgroundColor: 'purple',
        borderWidth: 1,
        margin: 5
    }
});