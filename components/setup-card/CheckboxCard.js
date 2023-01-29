import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'
import Checklist from '../../components/setup-card/Checkbox';
import Textbox from '../../components/setup-card/Textbox';
import { useRoute, useNavigation } from '@react-navigation/core'


export default function CheckboxCard(props) {
    const route = useRoute()
    const [selection, setSelection] = useState(null)
    const [direction, setDirection] = useState(null)

    let checkForNull = route.params.answer[0].text


    function reset(direction) {
        // if (direction === "SUBMIT") {
        //     //add code to write to JSON here
        //     navigation.navigate(props.nextPage)
        // }
        setDirection(null)
        setSelection(null)
    }
    return (
        <View style={styles.container}>
            <Title question={route.params.question} title={route.params.title} />
            {selection !== null ?
                <>
                    <Text style={styles.item}>{selection.text}</Text>
                    <Checklist direction={direction => reset(direction)} nextPage={route.params.nextPage} />
                </>
                :
                <>
                    {checkForNull === null ?
                        <Textbox nextPage={route.params.nextPage} skipable={route.params.skipable} numeric={route.params.numeric} />
                        :
                        <List changeSelection={selection => setSelection(selection)} data={route.params.answer} skipable={route.params.skipable} />
                    }
                </>}

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