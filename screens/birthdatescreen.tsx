import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack, styled } from "@gluestack-ui/themed";
import React from 'react';

import { SelectContent, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { verticalScale, horizontalScale } from "../components/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";


export const BirthDateScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box h={"100%"} px={20} py={36} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                            <Progress value={35} w={350} h={8}>
                                <ProgressFilledTrack bg="#EF5DA8" h={8} />
                            </Progress>
                            <Box flex={1} mt={verticalScale(50)} borderWidth={"$0"} >
                                <Text textAlign="left" w={"100%"} >
                                    <Text lineHeight={verticalScale(46)} fontSize={32} fontFamily='Poppins-SemiBold' color="#000000" >Your Birthdate? </Text>
                                </Text>
                            </Box>
                            <Box flex={1} justifyContent="center" alignContent="space-between" padding={50} px={verticalScale(30)} py={verticalScale(140)} borderWidth={"$0"} >
                                <Box flexDirection="row">
                                    <Box flex={1} m={2}>
                                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" fontFamily="Poppins-Regular">
                                            Day
                                        </Text>
                                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8} w={"70%"}>
                                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={2} />
                                        </Input>
                                    </Box>
                                    <Box flex={1} m={2}>
                                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" fontFamily="Poppins-Regular">
                                            Month
                                        </Text>
                                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8} w={"70%"}>
                                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={2} />
                                        </Input>
                                    </Box>
                                    <Box flex={1} m={2}>
                                        <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" fontFamily="Poppins-Regular">
                                            Year
                                        </Text>
                                        <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                            <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={4} />
                                        </Input>
                                    </Box>
                                </Box>
                            </Box>
                            <VStack alignSelf="center" w={"95%"} justifyContent="flex-end" mt={36}>
                                <Box m={verticalScale(8)}>
                                    <PrimaryButton label="Next" onPress={() => { console.log("Test 1") }} />
                                </Box>
                                <Box m={verticalScale(8)}>
                                    <SecondaryButton label="Go Back" onPress={() => { console.log("Test 2") }} />
                                </Box>
                            </VStack>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </LinearGradient >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    InputBoxStyle: {
        shadowColor: "rgba(245, 130, 41, 0.16)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 8,
        elevation: 8,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#EF5DA8",
        borderWidth: 1.2,
    }
});