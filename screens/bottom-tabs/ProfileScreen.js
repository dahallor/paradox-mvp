import { StyleSheet, Text, View } from 'react-native'
import ProfileHeader from '../../components/profile/ProfileHeader'
import DisplayAnswers from '../../components/profile/DisplayAnswers';
import Textbox from '../../components/profile/Textbox';



export default function ProfileScreen() {
    //First box is for demographics, second for core questions, third for top hobbies
    return (
        <View style={styles.container}>
            <ProfileHeader />
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
        width: '95%'
    }
})