import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'
import Checklist from '../../components/setup-card/Checkbox';

//TODO: styling here for text is hard coded seperate from list so fix that at some point


export default function UserSetupScreen() {
    const [selection, setSelection] = useState(null)
    const [direction, setDirection] = useState(null)
    const [questions, setQuestions] = useState(null)
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

    function reset(direction) {
        console.log("reset", direction)
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
            <Title />
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