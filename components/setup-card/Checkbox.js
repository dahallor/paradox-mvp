import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

//TODO: fix markers
//TODO: sync to json server
//TODO: formatting obviously
//TODO: make direction buttons unclickable if all makers are empty

export default function Checklist(props) {
    const [marker1, setMarker1] = useState("")
    const [marker2, setMarker2] = useState("")
    const [marker3, setMarker3] = useState("")
    const [marker4, setMarker4] = useState("")

    function clearMarkers() {
        setMarker1("")
        setMarker2("")
        setMarker3("")
        setMarker4("")
    }

    function pressHandler(setMarker) {
        clearMarkers()
        setMarker("X")
    }

    function directionHandler(direction) {
        //TODO: sync to api endpoints
        props.direction(direction)
        clearMarkers()
    }
    return (
        <View style={styles.container}>
            <View style={styles.line}>
                <TouchableOpacity style={styles.checkbox}>
                    <Text style={styles.marker} onPress={() => pressHandler(setMarker1)}>{marker1}</Text>
                </TouchableOpacity>
                <Text>    Very Important</Text>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.checkbox}>
                    <Text style={styles.marker} onPress={() => pressHandler(setMarker2)}>{marker2}</Text>
                </TouchableOpacity>
                <Text>    Important</Text>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.checkbox}>
                    <Text style={styles.marker} onPress={() => pressHandler(setMarker3)}>{marker3}</Text>
                </TouchableOpacity>
                <Text>    Somewhat Important</Text>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.checkbox}>
                    <Text style={styles.marker} onPress={() => pressHandler(setMarker4)}>{marker4}</Text>
                </TouchableOpacity>
                <Text>    Not Important</Text>
            </View>
            <View style={styles.line}>
                <TouchableOpacity style={styles.directionbox}>
                    <Text style={styles.marker} onPress={() => directionHandler("BACK")}>BACK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.directionbox}>
                    <Text style={styles.marker} onPress={() => directionHandler("SUBMIT")}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
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
    directionbox: {
        width: 60,
        height: 25,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'space-between'
    },
    line: {
        flexDirection: 'row',
        backgroundColor: 'gold',
        padding: 10,
        margin: 5
    }
})