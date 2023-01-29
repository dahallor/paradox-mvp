import { createStackNavigator } from "@react-navigation/stack";

import UserSetupScreen from "../screens/drill-down/UserSetupScreen";



export default function SetupNav(props) {
    const Stack = createStackNavigator()
    let userData = require('../data/user-profile.json')
    const questions = require('../data/questions-template.json')
    const answers = require('../data/answers-template.json')
    console.log("SetupNav")
    console.log(answers)

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Age" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Age, answer: answers.demographicsAnswers.Age, skipable: false, numerical: true, selectMultiple: false, nextPage: 'Religion' }} />
            <Stack.Screen name="Religion" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Religion, answer: answers.demographicsAnswers.Religion, skipable: false, numerical: false, selectMultiple: false, nextPage: 'Orientation' }} />
            <Stack.Screen name="Orientation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Orientation, answer: answers.demographicsAnswers.Orientation, skipable: false, numerical: false, selectMultiple: false, nextPage: 'Gender' }} />
            <Stack.Screen name="Gender" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.GenderIdentity, answer: answers.demographicsAnswers.GenderIdentity, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Zodiac' }} />
            <Stack.Screen name="Zodiac" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Zodiac, answer: answers.demographicsAnswers.Zodiac, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Occupation' }} />
            <Stack.Screen name="Occupation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Occupation, answer: answers.demographicsAnswers.Occupation, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Education' }} />
            <Stack.Screen name="Education" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Education, answer: answers.demographicsAnswers.Education, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Race' }} />
            <Stack.Screen name="Race" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Race, answer: answers.demographicsAnswers.Race, skipable: true, numerical: false, selectMultiple: true, nextPage: 'Height' }} />
            <Stack.Screen name="Height" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Height, answer: answers.demographicsAnswers.Height, skipable: true, numerical: false, selectMultiple: false, nextPage: 'BodyType' }} />
            <Stack.Screen name="BodyType" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.BodyType, answer: answers.demographicsAnswers.BodyType, skipable: true, numerical: false, selectMultiple: true, nextPage: 'Diet' }} />
            <Stack.Screen name="Diet" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Diet, answer: answers.demographicsAnswers.Diet, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Drinks' }} />
            <Stack.Screen name="Drinks" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Drinks, answer: answers.demographicsAnswers.Drinks, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Cigs' }} />
            <Stack.Screen name="Cigs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Cigs, answer: answers.demographicsAnswers.Cigs, skipable: true, numerical: false, selectMultiple: false, nextPage: 'Weed' }} />
            <Stack.Screen name="Weed" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Weed, answer: answers.demographicsAnswers.Weed, skipable: true, numerical: false, selectMultiple: false, nextPage: 'HardDrugs' }} />
            <Stack.Screen name="HardDrugs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.HardDrugs, answer: answers.demographicsAnswers.HardDrugs, skipable: true, numerical: false, selectMultiple: false, nextPage: null }} />
        </Stack.Navigator>
    )
}