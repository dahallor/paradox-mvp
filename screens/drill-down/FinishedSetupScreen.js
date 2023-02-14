import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ROUTES from "../../constants/Routes";
import { PATCHRequest } from '../../components/shared/Requests'
import { useRoute, useNavigation } from '@react-navigation/core'


export default function FinishedSetupScreen() {
    const navigation = useNavigation()
    const route = useRoute()


    async function proceed(destination) {
        let path = ROUTES.ANDROID_USER_USERINFO
        PATCHRequest(path, "hasUserProfile", true)
        if (destination === 'Home') {
            navigation.navigate(route.params.nextPage)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Congrations! You Done it!</Text>
            <Text style={styles.subheader}>You have completed your basic user profile and are ready to start using the app. You can either answer more questions, or proceed to the home screen</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => proceed('Home')}>
                    <Text>Go Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => proceed()}>
                    <Text>More Questions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    },
    header: {
        fontSize: 36
    },
    subheader: {
        fontSize: 24
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        borderWidth: 1
    }
})