import { StyleSheet, View, Text } from "react-native";


export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search Stub</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
})