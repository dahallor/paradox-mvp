import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'
import Checklist from '../../components/setup-card/Checkbox';
import Textbox from '../../components/setup-card/Textbox';
import SetupFooter from './SetupFooter';
import { useRoute, useNavigation } from '@react-navigation/core'


export default function CheckboxCard(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [selection, setSelection] = useState(null)
    const [devComment, setDevComment] = useState(null)

    function proceed(direction) {

        if (direction === "Submit") {
            //Add JSON post request here
        }
        if (direction === "Skip") {
            //post null to JSON file

        }
        setSelection(null)
        setDevComment(null)
        if (direction !== "Back") {
            navigation.navigate(route.params.nextPage)
        }

    }
    return (
        <View style={styles.container}>
            <Title question={route.params.question} title={route.params.title} devComment={devComment} />
            <>
                {selection === null ?
                    <List changeSelection={selection => setSelection(selection)} getDevComment={devComment => setDevComment(devComment)} data={route.params.answer} multiple={route.params.multiple} />
                    :
                    <Checkbox />
                }
            </>
            <SetupFooter skipable={route.params.skipable} getDirection={direction => proceed(direction)} canGoBack={false} selection={selection} />
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