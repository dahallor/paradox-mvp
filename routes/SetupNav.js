import { createStackNavigator } from "@react-navigation/stack";

import UserSetupScreen from "../screens/drill-down/UserSetupScreen";



export default function SetupNav(props) {
    const Stack = createStackNavigator()
    let userData = require('../data/user-profile.json')
    const questions = require('../data/questions-template.json')
    const answers = require('../data/answers-template.json')

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Age" component={UserSetupScreen} initialParams={{ question: questions.demographicQuestions.Age, title: "Demographics" }} />
        </Stack.Navigator>
    )
}