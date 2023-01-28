import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'
import Checklist from '../../components/setup-card/Checkbox';
import { useRoute, useNavigation } from '@react-navigation/core'

//TODO: styling here for text is hard coded seperate from list so fix that at some point
//TODO: set callback function to set dev comments on button press from list
//TODO: add condition to render textbox on null and flatlist on not null


export default function UserSetupScreen(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [selection, setSelection] = useState(null)
    const [direction, setDirection] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [placeholder, setPlaceholder] = useState([
        { key: '1', text: "yes" },
        { key: '2', text: "no" }
    ])

    function reset(direction) {

        if (direction === "BACK") {
            //do stuff
        }
        if (direction === "SUBMIT") {
            // do other stuff
        }
        setDirection(null)
        setSelection(null)
    }
    return (
        <View style={styles.container}>
            <Title question={route.params.question} title={route.params.title} />
            {selection === null ?
                <List changeSelection={selection => setSelection(selection)} data={placeholder} /> :
                <>
                    <Text style={styles.item}>{selection.text}</Text>
                    <Checklist direction={direction => reset(direction)} />
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    item: {
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
    }
}
)