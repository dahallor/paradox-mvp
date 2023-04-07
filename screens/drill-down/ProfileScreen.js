import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/core'
import ProfileHeader from '../../components/profile/ProfileHeader'
import DisplayAnswers from '../../components/profile/DisplayAnswers';
import Textbox from '../../components/profile/Textbox';
import { useEffect } from 'react';

//TODO: do a GET request from match

export default function ProfileScreen({ navigation, route }) {
    //First box is for demographics, second for core questions, third for top hobbies
    let name = route.params.matchName
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () =>
                <Text>{name}</Text>
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <DisplayAnswers />
            <DisplayAnswers />
            <DisplayAnswers />
            <Text>Placeholder for Link to More Questions</Text>
            <Textbox />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    }
})