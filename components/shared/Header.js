import { StyleSheet, Text, View, SafeAreaView } from 'react-native';



export default function Header(props) {
    return (
        <SafeAreaView style={{ backgroundColor: props.color, height: 75, width: '100%' }}>
            <Text style={styles.title}>Paradox</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        padding: 25,
        color: 'white'
    }
})