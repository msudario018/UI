import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack, HStack, styled, Button, } from "@gluestack-ui/themed";
import React from 'react';

import { SelectContent, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, View, Image, TouchableWithoutFeedback, Pressable, } from "react-native";
import { verticalScale, horizontalScale } from "../components/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";
import { FontFamily } from "../GlobalStyles";
import { config } from '@gluestack-ui/config';
import { PalGirlPic, PalGuyPic, PinayPalPic } from "../components/AppIcon"



export const FinishPalScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
            <Box h={"100%"} px={30} py={24} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                    <Box  mt={verticalScale(26)} borderWidth={"$0"} >
                        <Progress value={100} w={350} h={8} alignSelf="center">
                            <ProgressFilledTrack bg="#EF5DA8" h={8} />
                        </Progress>
                        <Box  py={verticalScale(26)}  borderWidth={"$0"} >
                            <Text textAlign="left" w={"100%"} >
                                <Text lineHeight={verticalScale(46)} fontSize={32} fontFamily='Poppins-SemiBold' color="#000000" >Let's meet your      </Text>
                                <Text lineHeight={verticalScale(46)} fontSize={32} fontFamily='Poppins-Bold' color="#000000" >PAL</Text>
                            </Text>
                        </Box>
                        <Box py={(200)} px={0} $ios-p={24}  justifyContent="flex-end">
                            <Center flex={1} pt={0} borderWidth={"$0"} alignSelf="center">
                                <PinayPalPic />
                            </Center>
                        </Box>
                        <Box borderWidth={"$0"} mt={50} >
                            <PrimaryButton label={"Next"} onPress={() => { }} />
                        </Box>
                        <Box mt={20} borderWidth={"$0"}>
                            <SecondaryButton label={"Go Back"} onPress={() => { }} />
                        </Box>
                    </Box>
                </Box>
            </LinearGradient>
        </SafeAreaView >
    );
};