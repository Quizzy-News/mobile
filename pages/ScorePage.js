import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';
// import * as Sharing from 'expo-sharing';
import { Feather, AntDesign, Ionicons } from '@expo/vector-icons';
// import { scoreAnalysis } from '../utilities/scoreAnalysis'

export default function ScorePage({ route }) {
    // const [finalScore, setFinalScore] = useState(score)
    const [score, setScore] = useState(route.params.score);
    const [record, setRecord] = useState(route.params.record);
    const [time, setTime] = useState(route.params.time);

    useEffect(() => {
        setScore(route.params.score);
        setRecord(route.params.record);
        setTime(route.params.time);

        console.log(score);
        console.log(record);
        console.log(time);
    }, [route.params.score, route.params.record, route.params.time])

    const results = [
        {
            id: 1,
            answer: "France",
            link: "https://www.google.com/"
        },
        {
            id: 2,
            answer: "China",
            link: "https://www.google.com/"
        },
        {
            id: 3,
            answer: "Taylor Swift",
            link: "https://www.google.com/"
        },
        {
            id: 4,
            answer: "Mauna Loa",
            link: "https://www.google.com/"
        },
        {
            id: 5,
            answer: "Mpox",
            link: "https://www.google.com/"
        },
    ]

    return (
        <View className="h-screen p-5 flex items-center bg-white">
            <Text className="pt-5 self-start font-lexend font-bold text-[#909090] uppercase">
                QUIZZY.NEWS
            </Text>
            <Text className="pt-5 text-xl font-lexend font-bold uppercase">
                Wow! You're getting there!
            </Text>
            <View className="pt-5 flex items-center">
                {console.log(score)}
                <Text className="text-4xl font-lexend font-bold">{score}</Text>
                <Text>Total Score</Text>
            </View>
            <View className="w-full pt-12 flex items-center ">
                <Text className="text-xl font-lexend font-bold">Question Review</Text>
                <Text className="pb-3 text-sm font-lexend">Click on the answers to read more about each story.</Text>
                {results.map(result => {
                    return (
                        <Pressable className="w-full h-9 mb-[10px] flex flex-row justify-between items-center" key={result.id}>
                            <View className="h-full bg-[#E3E3E3] w-[103%] rounded-md absolute top-2 right-[-5]" />
                            <View className="h-full bg-[#6BA530] w-full rounded-md absolute top-1" />
                            <View className="h-full bg-[#78C93C] w-full rounded-md absolute" />
                            <Text className="pl-2 text-sm font-lexend font-bold text-white">{result.id}</Text>
                            <Text className="text-lg font-lexend font-bold text-white underline">{result.answer}</Text>
                            <View className="pr-2">
                                <Ionicons name="exit-outline" size={24} color="white" />
                            </View>
                        </Pressable>
                    )
                })}
                <Text className="pt-2 text-lg font-lexend">
                    Next news quiz in <Text className="font-bold">12:19:00</Text>
                </Text>
            </View>
            <View className="w-full mt-auto flex flex-row justify-between">
                <Pressable className="flex flex-col items-center">
                    <View className="w-16 h-9 flex flex-col items-center justify-center">
                        <View className="h-full bg-[#646464] w-full rounded-md absolute top-1" />
                        <View className="h-full bg-[#909090] w-full rounded-md absolute" />
                        <AntDesign name="exclamationcircleo" size={26} color="white" />
                    </View>
                    <Text className="pt-1 text-lg font-lexend font-bold text-[#909090] uppercase">About</Text>
                </Pressable>
                <Pressable className="flex flex-col items-center">
                    <View className="w-16 h-9 flex flex-col items-center justify-center">
                        <View className="h-full bg-[#53ADF0] w-full rounded-md absolute top-1" />
                        <View className="h-full bg-[#80C9FA] w-full rounded-md absolute" />
                        <Feather name="share-2" size={26} color="white" />
                    </View>
                    <Text className="pt-1 text-lg font-lexend font-bold text-[#80C9FA] uppercase">Share</Text>
                </Pressable>
            </View>
        </View>
    )
}