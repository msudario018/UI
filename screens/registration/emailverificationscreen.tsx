import { Box, Icon, Input, InputField, SafeAreaView, Select, SelectBackdrop, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { BellDotIcon, ChevronDownIcon, MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, PrimaryInputBox, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";
import { SelectContent } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";


export const EmailRegistrationVerificationScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} px={30} py={24} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                        <Box flex={1} mt={verticalScale(54)} borderWidth={"$0"}>
                            <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins-SemiBold' textAlign="left" width={"100%"} color="#333">Verify your email address</Text>
                        </Box>
                        <Box flex={1} justifyContent="center" borderWidth={"$0"}>
                        <Text mt={verticalScale(36)} lineHeight={24} fontSize={16} fontFamily='Poppins-Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                                {`A link has been sent to your email address. Please click on it to verify your email for your account`}</Text>                         
                        </Box>
                        <Box flex={1} justifyContent="flex-end" borderWidth={"$0"} w={"100%"}>
                            <Box borderWidth={"$0"}>
                                <PrimaryButton label={"Finish Registration"} onPress={() => { 
                                    
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </TouchableWithoutFeedback>
            </LinearGradient>
        </SafeAreaView>
    );
}

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
        borderColor: "#ffb9c6",
        borderWidth: 1,
        backgroundColor: "#fff",
    }
});