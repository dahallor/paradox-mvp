import { createStackNavigator } from "@react-navigation/stack";

import UserSetupScreen from "../screens/drill-down/UserSetupScreen";
import RootNav from "./RootNav";



export default function SetupNav(props) {
    const Stack = createStackNavigator()
    let userData = require('../data/user-profile.json')
    const questions = require('../data/questions-template.json')
    const answers = require('../data/answers-template.json')

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="UserName" component={UserSetupScreen} initialParams={{ title: "Introductory", question: questions.introQuestions.UserName, answer: answers.introAnswers.UserName, skipable: false, numerical: false, nextPage: 'Location' }} />
            <Stack.Screen name="Location" component={UserSetupScreen} initialParams={{ title: "Introductory", question: questions.introQuestions.Location, answer: answers.introAnswers.Location, skipable: false, numerical: false, nextPage: 'Age' }} />
            <Stack.Screen name="Age" component={UserSetupScreen} initialParams={{ title: "Introductory", question: questions.introQuestions.Age, answer: answers.introAnswers.Age, skipable: false, numerical: true, nextPage: 'Religion' }} />

            <Stack.Screen name="Religion" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Religion, answer: answers.demographicsAnswers.Religion, skipable: true, numerical: false, nextPage: 'Orientation' }} />
            <Stack.Screen name="Orientation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Orientation, answer: answers.demographicsAnswers.Orientation, skipable: false, numerical: false, nextPage: 'Gender' }} />
            <Stack.Screen name="Gender" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.GenderIdentity, answer: answers.demographicsAnswers.GenderIdentity, skipable: true, numerical: false, nextPage: 'Zodiac' }} />
            <Stack.Screen name="Zodiac" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Zodiac, answer: answers.demographicsAnswers.Zodiac, skipable: true, numerical: false, nextPage: 'Occupation' }} />
            <Stack.Screen name="Occupation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Occupation, answer: answers.demographicsAnswers.Occupation, skipable: true, numerical: false, nextPage: 'Education' }} />
            <Stack.Screen name="Education" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Education, answer: answers.demographicsAnswers.Education, skipable: true, numerical: false, nextPage: 'Race' }} />
            <Stack.Screen name="Race" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Race, answer: answers.demographicsAnswers.Race, skipable: true, numerical: false, nextPage: 'Height' }} />
            <Stack.Screen name="Height" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Height, answer: answers.demographicsAnswers.Height, skipable: true, numerical: false, nextPage: 'BodyType' }} />
            <Stack.Screen name="BodyType" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.BodyType, answer: answers.demographicsAnswers.BodyType, skipable: true, numerical: false, nextPage: 'Diet' }} />
            <Stack.Screen name="Diet" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Diet, answer: answers.demographicsAnswers.Diet, skipable: true, numerical: false, nextPage: 'Drinks' }} />
            <Stack.Screen name="Drinks" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Drinks, answer: answers.demographicsAnswers.Drinks, skipable: true, numerical: false, nextPage: 'Cigs' }} />
            <Stack.Screen name="Cigs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Cigs, answer: answers.demographicsAnswers.Cigs, skipable: true, numerical: false, nextPage: 'Weed' }} />
            <Stack.Screen name="Weed" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.Weed, answer: answers.demographicsAnswers.Weed, skipable: true, numerical: false, nextPage: 'HardDrugs' }} />
            <Stack.Screen name="HardDrugs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: questions.demographicQuestions.HardDrugs, answer: answers.demographicsAnswers.HardDrugs, skipable: true, numerical: false, nextPage: 'Seeking' }} />

            <Stack.Screen name="Seeking" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Seeking, answer: answers.coreAnswers.Seeking, skipable: false, numerical: false, nextPage: 'Kids' }} />
            <Stack.Screen name="Kids" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Kids, answer: answers.coreAnswers.Kids, skipable: true, numerical: false, nextPage: 'RelationshipStructure' }} />
            <Stack.Screen name="RelationshipStructure" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.RelationshipStructure, answer: answers.coreAnswers.RelationshipStructure, skipable: true, numerical: false, nextPage: 'Religious' }} />
            <Stack.Screen name="Religious" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Religious, answer: answers.coreAnswers.Religious, skipable: true, numerical: false, nextPage: 'SexDrive' }} />
            <Stack.Screen name="SexDrive" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.SexDrive, answer: answers.coreAnswers.SexDrive, skipable: true, numerical: false, nextPage: 'Kink' }} />
            <Stack.Screen name="Kink" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Kink, answer: answers.coreAnswers.Kink, skipable: true, numerical: false, nextPage: 'Roots' }} />
            <Stack.Screen name="Roots" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Roots, answer: answers.coreAnswers.Roots, skipable: true, numerical: false, nextPage: 'PreferedLocation' }} />
            <Stack.Screen name="PreferedLocation" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.PreferedLocation, answer: answers.coreAnswers.PreferedLocation, skipable: true, numerical: false, nextPage: "Politics" }} />
            <Stack.Screen name="Politics" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: questions.coreQuestions.Politics, answer: answers.coreAnswers.Politics, skipable: true, numerical: false, nextPage: "RootNav" }} />

            {/* Set up something here to change json variblae hasUserProfile to true, it will switch to rendering home screen */}
            {/* <Stack.Screen name="RootNav" component={RootNav} /> */}
        </Stack.Navigator>
    )
}