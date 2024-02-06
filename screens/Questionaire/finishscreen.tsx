import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack, styled } from "@gluestack-ui/themed";
import { HeartsBG, PinayPalLogoAndTextWhite, PinayPalLogoWhite } from "../../components/AppIcon";

import { SelectContent, Progress, ProgressFilledTrack } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { verticalScale, horizontalScale } from "../../components/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";


export const FinishScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box p={48} $ios-p={24} h={"100%"} justifyContent="space-around">
                            <Center flex={1} justifyContent="flex-end">
                                <PinayPalLogoAndTextWhite />
                            </Center>
                            <Box flex={1} mt={verticalScale(50)} borderWidth={"$0"} >
                                <Text textAlign="center" w={"100%"} >
                                    <Text lineHeight={verticalScale(36)} fontSize={18} fontFamily='Poppins-SemiBold' color="#000000" >"You have successfully completed the partner matching test. We will now proceed to update our matching algorithm with the information gathered from your test results."</Text>
                                </Text>
                            </Box>
                            <VStack alignSelf="center" w={"95%"} justifyContent="flex-end" mt={36}>
                                <Box m={verticalScale(8)}>
                                    <PrimaryButton label="Start" onPress={() => { console.log("Test 1") }} />
                                </Box>
                                <Box m={verticalScale(8)}>
                                    <SecondaryButton label="Cancel" onPress={() => { console.log("Test 2") }} />
                                </Box>
                            </VStack>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </LinearGradient >
        </SafeAreaView >
    );
};