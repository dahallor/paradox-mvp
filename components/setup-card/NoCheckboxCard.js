import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Title from '../../components/setup-card/Title'
import List from '../../components/setup-card/List'
import Checklist from '../../components/setup-card/Checkbox';
import Textbox from '../../components/setup-card/Textbox';
import { useRoute, useNavigation } from '@react-navigation/core'


//TODO: make a stand alone submit button for this component so they can read dev comments
export default function CheckboxCard(props) {
    const route = useRoute()
    const navigation = useNavigation()
    const [selection, setSelection] = useState(null)


    let checkForNull = route.params.answer[0].text
    console.log("NoCheckbox")
    console.log(route.params.answer)
    console.log(props)


    function proceed() {
        //Add JSON post request here
        setSelection(null)
        navigation.navigate(route.params.nextPage)
    }
    return (
        <View style={styles.container}>
            <Title question={route.params.question} title={route.params.title} />
            <>
                {checkForNull === null ?
                    <Textbox nextPage={route.params.nextPage} skipable={route.params.skipable} numeric={route.params.numeric} />
                    :
                    <List changeSelection={selection => proceed(selection)} data={route.params.answer} skipable={route.params.skipable} />
                }
            </>
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