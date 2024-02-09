import { LinearGradient } from "expo-linear-gradient";
import { Box, Center, KeyboardAvoidingView, SafeAreaView, Text, VStack } from "@gluestack-ui/themed";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";

import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { verticalScale } from "../../components/ScaleHelper";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";


export const FinishScreen = ({navigation}) => {
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
                                    <PrimaryButton label="Finish" onPress={() => { console.log("Test 1") }} />
                                </Box>
                                <Box m={verticalScale(8)}>
                                    <SecondaryButton label="Cancel" onPress={() => {navigation.navigate("QuestionThirteenScreen")}} />
                                </Box>
                            </VStack>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </LinearGradient >
        </SafeAreaView >
    );
};