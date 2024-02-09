import { Box, Center, Input, InputField, InputIcon, InputSlot, KeyboardAvoidingView, SafeAreaView, Text, VStack } from "@gluestack-ui/themed";
import React, { useState } from "react";
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, verticalScale } from "../components/ScaleHelper";
import { HeartsBG, PinayPalLogoAndTextWhite, PinayPalLogoWhite } from "../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";
import { Keyboard, Platform, TouchableWithoutFeedback,  } from "react-native";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";



const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }

    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <Box p={48} $ios-p={24} h={"100%"} justifyContent="space-around">
                            <Center flex={1} justifyContent="flex-end">
                                <PinayPalLogoWhite />
                            </Center>
                            <VStack flex={1} alignItems="center" justifyContent="flex-end">
                                <Box w={horizontalScale(300)}>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Email Address
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                                        <InputField type="text" color="#676f82" />
                                    </Input>
                                </Box>
                                <Box w={horizontalScale(300)}>
                                    <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                        Password
                                    </Text>
                                    <Input alignSelf="stretch" borderColor="#676f82" size="xl">
                                        <InputField type={showPassword ? "text" : "password"} color="#676f82" />
                                        <InputSlot pr="$3" onPress={handleState}>
                                            {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                                            <InputIcon
                                                as={showPassword ? EyeIcon : EyeOffIcon}
                                                color="#676f82"
                                            />
                                        </InputSlot>
                                    </Input>
                                </Box>
                            </VStack>
                            <VStack alignSelf="center" w={"95%"} justifyContent="flex-end" mt={36}>
                                <Box m={verticalScale(8)}>
                                    <PrimaryButton label="Login" onPress={() => { console.log("Test 1") }} />
                                </Box>
                                <Box m={verticalScale(8)}>  
                                    <SecondaryButton label="Back" onPress={() => { console.log("Test 2") }} />
                                </Box>
                            </VStack>
                        </Box>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </LinearGradient>
        </SafeAreaView>
    );
}



export default LoginScreen;