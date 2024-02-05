import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack, styled } from "@gluestack-ui/themed";
import React from 'react';

import { SelectContent } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { verticalScale, horizontalScale } from "../components/ScaleHelper";
import { PalGuyPic } from "../components/AppIcon"
import { PrimaryButton, SecondaryButton } from "../components/FormElements";



export const WelcomeScreenPal = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <Box h={"100%"} px={30} py={24} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                    <Box flex={1} mt={verticalScale(89)} borderWidth={"$0"} >
                        <Text textAlign="left" w={"100%"} >
                            <Text lineHeight={verticalScale(46)} fontSize={28} fontFamily='Poppins-SemiBold' color="#000000">Welcome </Text>
                            <Text fontSize={28} fontFamily='Poppins-Bold' color="#000000">PAL,</Text>
                        </Text>
                        <Box p={57} $ios-p={24} height={"100%"} justifyContent="flex-end">
                            <Center flex={1} pt={0} borderWidth={"$0"}>
                                <PalGuyPic />
                            </Center>
                            <Box>
                                <Text textAlign="left" w={"100%"} mt={16} fontFamily="Poppins-Regular" borderWidth={"$0"}>
                                    <Text>Almost there to meet your </Text>
                                    <Text fontFamily="Poppins-Bold" color="#EF5DA8">PINAY </Text>
                                    <Text fontFamily="Poppins-Regular">but let’s setup your profile first.</Text>
                                </Text>
                            </Box>
                            <Box borderWidth={"$0"} mt={48}>
                                <PrimaryButton label={"Next"} onPress={() => { }} />
                            </Box>
                            <Box mt={20} borderWidth={"$0"}>
                                <SecondaryButton label={"Go Back"} onPress={() => { }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LinearGradient>
        </SafeAreaView >
    );
};