import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import ROUTES from '../constants/Routes'

import UserSetupScreen from "../screens/drill-down/UserSetupScreen";




export default function SetupNav(props) {
    // let userInfo = require('../data/user-profile.json')
    let questions = require('../data/questions-template.json')
    let answers = require('../data/answers-template.json')



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
        run()

    }, [])

    async function run() {
        let userBool = await userCalls()
        let questionsBool = await questionCalls()
        let answersBool = await answerCalls()
        await checkIfLoaded(userBool, questionsBool, answersBool)
    }

    async function userCalls() {
        let path = ROUTES.ANDROID_USER_USERINFO
        let data = await APICall(path)
        setUserInfo(data)

        path = ROUTES.ANDROID_USER_SETTINGS
        data = await APICall(path)
        setUserSettings(data)

        path = ROUTES.ANDROID_USER_DEMO
        data = await APICall(path)
        setUserDemographics(data)

        path = ROUTES.ANDROID_USER_CORE
        data = await APICall(path)
        setUserCoreAnswers(data)

        return true
    }

    async function questionCalls() {
        let path = ROUTES.ANDROID_Q_INTRO
        let data = await APICall(path)
        setIntroQuestions(data)

        path = ROUTES.ANDROID_Q_DEMO
        data = await APICall(path)
        setDemographicQuestions(data)

        path = ROUTES.ANDROID_Q_CORE
        data = await APICall(path)
        setCoreQuestions(data)

        return true

    }

    async function answerCalls() {
        let path = ROUTES.ANDROID_A_INTRO
        let data = await APICall(path)
        setIntroAnswers(data)

        path = ROUTES.ANDROID_A_DEMO
        data = await APICall(path)
        setDemographicAnswers(data)

        path = ROUTES.ANDROID_A_CORE
        data = await APICall(path)
        setCoreAnswers(data)

        return true

    }

    async function APICall(path) {
        try {
            const res = await fetch(path)
            const data = await res.json()
            if (!res.ok) {
                console.log('res issue')
                console.log(res)
                return
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function checkIfLoaded(userBool, questionsBool, answersBool) {
        console.log(userBool, questionsBool, answersBool)
        if (userBool === true && questionsBool === true && answersBool === true) {
            setIsLoaded(true)
            console.log("in if statement")
        } else {
            setIsLoaded(false)
        }

    }

    return (
        <>
            {isLoaded === true ?
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="UserName" component={UserSetupScreen} initialParams={{ title: "Introductory", question: introQuestions.UserName, answer: introAnswers.UserName, skipable: false, numerical: false, nextPage: 'Location' }} />
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
                    <Stack.Screen name="Politics" component={UserSetupScreen} initialParams={{ title: "Core Questions", question: coreQuestions.Politics, answer: coreAnswers.Politics, skipable: true, numerical: false, nextPage: "RootNav" }} />

                    {/* Set up something here to change json variblae hasUserProfile to true, it will switch to rendering home screen */}
                    {/* {/* <Stack.Screen name="RootNav" component={RootNav} />} */}
                </Stack.Navigator>
                :
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text>Loading...</Text>
                </View>
            }
        </>
    )
}