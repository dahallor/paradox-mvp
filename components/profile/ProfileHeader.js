import { StyleSheet, Text, View } from 'react-native'

export default function ProfileHeader() {
    const name = "Generic Thot Name"
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    name: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})