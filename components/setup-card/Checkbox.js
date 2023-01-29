import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//TODO: fix markers
//TODO: sync to json server
//TODO: formatting obviously
//TODO: Fix condition styling of invalid buttons, functionality should be working though as it goes nowhere onclick
//TODO: Change conditinoal to always make back button valid


export default function Checklist(props) {
    const [marker1, setMarker1] = useState("")
    const [marker2, setMarker2] = useState("")
    const [marker3, setMarker3] = useState("")
    const [marker4, setMarker4] = useState("")
    const navigation = useNavigation()

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
        navigation.navigate(props.nextPage)
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
                {marker1 !== "" || marker2 !== "" || marker3 !== "" || marker4 !== "" ?
                    <>
                        <TouchableOpacity style={styles.directionBoxValid}>
                            <Text style={styles.marker} onPress={() => directionHandler("BACK")}>BACK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.directionBoxValid}>
                            <Text style={styles.marker} onPress={() => directionHandler("SUBMIT")}>SUBMIT</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <TouchableWithoutFeedback style={styles.directionBoxValid}>
                            <Text style={styles.marker} onPress={() => directionHandler("BACK")}>BACK</Text>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={styles.directionBoxInvalid}>
                            <Text style={styles.marker}>SUBMIT</Text>
                        </TouchableWithoutFeedback>
                    </>
                }
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
    directionBoxValid: {
        width: 60,
        height: 25,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'space-between'
    },
    directionBoxInvalid: {
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