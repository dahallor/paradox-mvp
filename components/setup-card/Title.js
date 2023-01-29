import { StyleSheet, Text, View } from 'react-native';

//TODO: sync to JSON server
//TODO: make a stack naviagator

export default function Title(props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.question}>{props.question}</Text>
            <Text style={styles.devComments}>callback goes here</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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