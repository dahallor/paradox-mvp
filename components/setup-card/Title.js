import { StyleSheet, Text, View } from 'react-native';

//TODO: sync to JSON server
//TODO: make a stack naviagator

export default function Title(props) {
    console.log(props.title[0])
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.question}>{props.question[0]}</Text>
            <Text style={styles.devComments}>{props.question[1]}</Text>
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