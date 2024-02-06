import { Box, SafeAreaView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { BellDotIcon, MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, PrimaryInputBox, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";
import { useState } from "react";


export const RegistrationStartScreen = ({ navigation }) => {
    const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <Box h={"100%"} px={30} py={24} flexDirection="column" justifyContent="space-between">
                    <Box flex={1} alignItems="center" alignSelf="stretch" py={36} borderWidth={"$0"}>
                        <PinayPalLogoAndTextWhite />
                    </Box>
                    <Box flex={1} justifyContent="flex-end" mt={36} borderWidth={"$0"} w={"100%"}>
                        <Box>
                            <Text textAlign="center" fontFamily="Poppins-Regular">
                                <Text>By continuing with the signup process, you agree to our </Text>
                                <Text fontFamily="Poppins-SemiBold">Terms and Conditions</Text>
                                <Text> as outlined.</Text>
                            </Text>
                            <Text textAlign="center" w={"100%"} mt={16} fontFamily="Poppins-Regular">
                                <Text>Learn about our use of your data in our </Text>
                                <Text fontFamily="Poppins-SemiBold">Privacy Policy</Text>
                            </Text>
                        </Box>
                        <Box borderWidth={"$0"} mt={48}>
                            <PrimaryButton label={"I'm Pal, looking for Pinays to Chat"} onPress={() => { 
                                navigation.navigate("MobileNumberScreen");
                            }} />
                        </Box>
                        <Box mt={20} borderWidth={"$0"}>
                            <SecondaryButton label={"I'm contented for now"} onPress={() => { 
                                console.log("cancel clicked!")
                                navigation.goBack();
                            }} />
                        </Box>
                    </Box>
                </Box>               
            </LinearGradient>
        </SafeAreaView>
    );
}