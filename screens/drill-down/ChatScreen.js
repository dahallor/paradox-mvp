import { StyleSheet, View, Text } from "react-native";


export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <Text>Chat Stub</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightpurple'
    }
})