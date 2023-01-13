import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.question}>Question n</Text>
            <Text style={styles.devComments}>Dev Comments</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28
    },
    question: {
        fontSize: 16
    },
    devComments: {
        fontSize: 12
    },
});