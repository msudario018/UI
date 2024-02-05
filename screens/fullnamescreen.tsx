import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack, styled } from "@gluestack-ui/themed";
import React from 'react';

import { SelectContent, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { verticalScale, horizontalScale } from "../components/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";


export const FullNameScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box h={"100%"} px={20} py={36} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                            <Progress value={25} w={350} h={8}>
                                <ProgressFilledTrack bg="#EF5DA8" h={8} />
                            </Progress>
                            <Box flex={1} mt={verticalScale(50)} borderWidth={"$0"} >
                                <Text textAlign="left" w={"70%"} >
                                    <Text lineHeight={verticalScale(46)} fontSize={32} fontFamily='Poppins-SemiBold' color="#000000" >What's your Full Name? </Text>
                                </Text>
                            </Box>
                            <VStack flex={1} alignItems="center" justifyContent="space-between"borderWidth={"$0"} >
                            <Box w={horizontalScale(300)} >
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        First Name
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Last Name
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                </Box>
                                </VStack>
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

