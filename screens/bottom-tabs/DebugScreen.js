import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ROUTES from "../../constants/Routes";
import { GETRequest, PATCHRequest } from '../../components/shared/Requests'
import { DebugFunction } from '../../components/shared/DebugFunction'


export default function DebugScreen() {
    let path = ROUTES.ANDROID_USER_USERINFO

    async function test1() {
        let data = await GETRequest(path)
        console.log(data)
    }

    async function test2() {
        let data = await DebugFunction(path)
        console.log("in screen with data:", data)
    }

    async function test3() {
        let data = await PATCHRequest(path, "userName", "Meow Mix")
        console.log(data)
    }
    return (
        <View style={styles.container}>
            <Text>Debug Stub</Text>
            <TouchableOpacity onPress={() => test3()}>
                <Text>Click Here To Send Info To Server</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})