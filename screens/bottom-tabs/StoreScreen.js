import { StyleSheet, View, Text } from "react-native";


export default function StoreScreen() {
    return (
        <View style={styles.container}>
            <Text>Store Stub</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral'
    }
})