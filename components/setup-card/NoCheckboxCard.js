import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'

import Textbox from '../../components/setup-card/Textbox';
import SetupFooter from './SetupFooter';
import { useRoute, useNavigation } from '@react-navigation/core'
import { GETRequest, PATCHRequest } from '../shared/Requests'

import ROUTES from '../../constants/Routes'


export default function NoCheckboxCard(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [selection, setSelection] = useState(null)
    const [devComment, setDevComment] = useState(null)

    let checkForNull = route.params.answer[0].text
    console.log(props)
    console.log(navigation)
    console.log(route)
    console.log(route.params.uuid)


    async function findPATCHPath(data) {
        let path = ROUTES.ANDROID_PROFILES + route.params.uuid + 'intro/'
        let res = PATCHRequest(path, "intro",)
    }

    async function proceed(direction) {

        if (direction === "Submit") {
            findPATCHPath(selection)
        }

        if (direction === "Skip") {
            findPATCHPath(null)
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
                {checkForNull === null ?
                    <Textbox changeSelection={selection => setSelection(selection)} nextPage={route.params.nextPage} skipable={route.params.skipable} numeric={route.params.numeric} />
                    :
                    <List changeSelection={selection => setSelection(selection)} getDevComment={devComment => setDevComment(devComment)} data={route.params.answer} multiple={route.params.multiple} />
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