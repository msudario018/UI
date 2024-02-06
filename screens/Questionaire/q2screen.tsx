import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, View, Pressable, } from "react-native";
import { Box, Text, ButtonGroup, Button, HStack } from "@gluestack-ui/themed";
import { verticalScale, horizontalScale } from "../../components/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";

export const QuestionTwoScreen = () => {

    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} px={20} py={14} flexDirection="column" justifyContent="space-between">
                        <Box flex={1} alignSelf="center" justifyContent="center">
                            <PinayPalLogoAndTextWhite />
                        </Box>
                        <Box flex={1} mt={verticalScale(5)} borderWidth={"$0"} >
                            <Text textAlign="center" w={"100%"} >
                                <Text lineHeight={verticalScale(36)} fontSize={24} fontFamily='Poppins-SemiBold' color="#000000" >
                                    What cuisine do you prefer?
                                </Text>
                            </Text>


                            
                        </Box>
                        <HStack alignSelf="center" py={horizontalScale(50)} px={verticalScale(50)}>
                            <Box m={verticalScale(8)} width={horizontalScale(150)}>
                                <Button bgColor="rgba(255, 255, 255, 1)" alignContent="center" borderRadius="$full" height={verticalScale(60)}>
                                    <Text textAlign="center" w={"100%"} >
                                        <Text lineHeight={verticalScale(36)} fontSize={20} fontFamily='Poppins-Regular' color="#000000" >Back</Text>
                                    </Text>
                                </Button>
                            </Box>
                            <Box m={verticalScale(8)} width={horizontalScale(150)}>
                                <Button bgColor="rgba(255, 185, 198, 0.5)" alignContent="center" borderRadius="$full" height={verticalScale(60)}>
                                    <Text textAlign="center" w={"100%"} >
                                        <Text lineHeight={verticalScale(36)} fontSize={20} fontFamily='Poppins-Regular' color="#000000" >Next</Text>
                                    </Text>
                                </Button>
                            </Box>
                        </HStack>
                    </Box>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </SafeAreaView>
    );
};

