import { Box, Center, SafeAreaView, VStack } from "@gluestack-ui/themed";
import React from "react";
//import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, verticalScale } from "../components/ScaleHelper";
import { HeartsBG, PinayPalLogoAndTextWhite } from "../components/AppIcon";
import { PrimaryButton, SecondaryButton } from "../components/FormElements";



const IndexScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']}>
                <Box p={48} $ios-p={24} h={"100%"} alignContent="center">
                    <Center py={48}>
                        <PinayPalLogoAndTextWhite />
                    </Center>
                    <VStack flex={1} justifyContent="flex-end" alignSelf="center" w={"95%"}>
                        <Box m={verticalScale(8)}>
                            <PrimaryButton label="Login" onPress={() => { console.log("Test 1") }} />
                        </Box>
                        <Box m={verticalScale(8)}>
                            <SecondaryButton label="Sign Up" onPress={() => { console.log("Test 2") }} />
                        </Box>
                    </VStack>
                </Box>
            </LinearGradient>
        </SafeAreaView>
    );
}



export default IndexScreen;