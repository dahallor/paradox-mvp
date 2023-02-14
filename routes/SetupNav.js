import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import ROUTES from '../constants/Routes'
import { GETRequest } from '../components/shared/Requests'

import UserSetupScreen from "../screens/drill-down/UserSetupScreen";
import FinishedSetupScreen from "../screens/drill-down/FinishedSetupScreen";
import RootNav from "./RootNav";




export default function SetupNav(props) {
    // let userInfo = require('../data/user-profile.json')
    // let questions = require('../data/questions-template.json')
    // let answers = require('../data/answers-template.json')



    const Stack = createStackNavigator()
    const [userInfo, setUserInfo] = useState(null)
    const [userSettings, setUserSettings] = useState(null)
    const [userDemographics, setUserDemographics] = useState(null)
    const [userCoreAnswers, setUserCoreAnswers] = useState(null)

    const [introQuestions, setIntroQuestions] = useState(null)
    const [demographicQuestions, setDemographicQuestions] = useState(null)
    const [coreQuestions, setCoreQuestions] = useState(null)

    const [introAnswers, setIntroAnswers] = useState(null)
    const [demographicAnswers, setDemographicAnswers] = useState(null)
    const [coreAnswers, setCoreAnswers] = useState(null)

    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        console.log('use effect')
        run()

    }, [])

    async function run() {
        let questionsBool = await questionCalls()
        let answersBool = await answerCalls()
        await checkIfLoaded(questionsBool, answersBool)
    }

    async function questionCalls() {
        let path = ROUTES.ANDROID_Q_INTRO
        let data = await GETRequest(path)
        setIntroQuestions(data)

        path = ROUTES.ANDROID_Q_DEMO
        data = await GETRequest(path)
        setDemographicQuestions(data)

        path = ROUTES.ANDROID_Q_CORE
        data = await GETRequest(path)
        setCoreQuestions(data)

        return true

    }

    async function answerCalls() {
        let path = ROUTES.ANDROID_A_INTRO
        let data = await GETRequest(path)
        setIntroAnswers(data)

        path = ROUTES.ANDROID_A_DEMO
        data = await GETRequest(path)
        setDemographicAnswers(data)

        path = ROUTES.ANDROID_A_CORE
        data = await GETRequest(path)
        setCoreAnswers(data)

        return true

    }



    async function checkIfLoaded(questionsBool, answersBool) {
        console.log(questionsBool, answersBool)
        if (questionsBool === true && answersBool === true) {
            setIsLoaded(true)
        } else {
            setIsLoaded(false)
        }

    }

    return (
        <>
            {isLoaded === true ?
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="UserName" component={UserSetupScreen} initialParams={{ title: "Introductory", userRoute: ROUTES.ANDROID_USER_USERINFO, question: introQuestions.UserName, answer: introAnswers.UserName, skipable: false, numerical: false, nextPage: 'Politics' }} />
                    <Stack.Screen name="Location" component={UserSetupScreen} initialParams={{ title: "Introductory", question: introQuestions.Location, answer: introAnswers.Location, skipable: false, numerical: false, nextPage: 'Age' }} />
                    <Stack.Screen name="Age" component={UserSetupScreen} initialParams={{ title: "Introductory", question: introQuestions.Age, answer: introAnswers.Age, skipable: false, numerical: true, nextPage: 'Religion' }} />

                    <Stack.Screen name="Religion" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Religion, answer: demographicAnswers.Religion, skipable: true, numerical: false, nextPage: 'Orientation' }} />
                    <Stack.Screen name="Orientation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Orientation, answer: demographicAnswers.Orientation, skipable: false, numerical: false, nextPage: 'Gender' }} />
                    <Stack.Screen name="Gender" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.GenderIdentity, answer: demographicAnswers.GenderIdentity, skipable: false, numerical: false, nextPage: 'Zodiac' }} />
                    <Stack.Screen name="Zodiac" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Zodiac, answer: demographicAnswers.Zodiac, skipable: true, numerical: false, nextPage: 'Occupation' }} />
                    <Stack.Screen name="Occupation" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Occupation, answer: demographicAnswers.Occupation, skipable: true, numerical: false, nextPage: 'Education' }} />
                    <Stack.Screen name="Education" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Education, answer: demographicAnswers.Education, skipable: true, numerical: false, nextPage: 'Race' }} />
                    <Stack.Screen name="Race" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Race, answer: demographicAnswers.Race, skipable: true, numerical: false, nextPage: 'Height' }} />
                    <Stack.Screen name="Height" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Height, answer: demographicAnswers.Height, skipable: true, numerical: false, nextPage: 'BodyType' }} />
                    <Stack.Screen name="BodyType" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.BodyType, answer: demographicAnswers.BodyType, skipable: true, numerical: false, nextPage: 'Diet' }} />
                    <Stack.Screen name="Diet" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Diet, answer: demographicAnswers.Diet, skipable: true, numerical: false, nextPage: 'Drinks' }} />
                    <Stack.Screen name="Drinks" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Drinks, answer: demographicAnswers.Drinks, skipable: true, numerical: false, nextPage: 'Cigs' }} />
                    <Stack.Screen name="Cigs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Cigs, answer: demographicAnswers.Cigs, skipable: true, numerical: false, nextPage: 'Weed' }} />
                    <Stack.Screen name="Weed" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.Weed, answer: demographicAnswers.Weed, skipable: true, numerical: false, nextPage: 'HardDrugs' }} />
                    <Stack.Screen name="HardDrugs" component={UserSetupScreen} initialParams={{ title: "Demographics", question: demographicQuestions.HardDrugs, answer: demographicAnswers.HardDrugs, skipable: true, numerical: false, nextPage: 'Seeking' }} />

                    <Stack.Screen name="Seeking" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Seeking, answer: coreAnswers.Seeking, skipable: false, numerical: false, nextPage: 'Kids' }} />
                    <Stack.Screen name="Kids" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Kids, answer: coreAnswers.Kids, skipable: true, numerical: false, nextPage: 'RelationshipStructure' }} />
                    <Stack.Screen name="RelationshipStructure" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.RelationshipStructure, answer: coreAnswers.RelationshipStructure, skipable: true, numerical: false, nextPage: 'Religious' }} />
                    <Stack.Screen name="Religious" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Religious, answer: coreAnswers.Religious, skipable: true, numerical: false, nextPage: 'SexDrive' }} />
                    <Stack.Screen name="SexDrive" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.SexDrive, answer: coreAnswers.SexDrive, skipable: true, numerical: false, nextPage: 'Kink' }} />
                    <Stack.Screen name="Kink" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Kink, answer: coreAnswers.Kink, skipable: true, numerical: false, nextPage: 'Roots' }} />
                    <Stack.Screen name="Roots" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Roots, answer: coreAnswers.Roots, skipable: true, numerical: false, nextPage: 'PreferedLocation' }} />
                    <Stack.Screen name="PreferedLocation" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.PreferedLocation, answer: coreAnswers.PreferedLocation, skipable: true, numerical: false, nextPage: "Politics" }} />
                    <Stack.Screen name="Politics" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Politics, answer: coreAnswers.Politics, skipable: true, numerical: false, nextPage: "FinishedSetupScreen" }} />

                    <Stack.Screen name="FinishedSetupScreen" component={FinishedSetupScreen} initalParams={{ nextPage: "ToHomeNav" }} />
                    <Stack.Screen name="ToHomeNav" component={RootNav} />
                </Stack.Navigator>
                :
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text>Loading...</Text>
                </View>
            }
        </>
    )
}