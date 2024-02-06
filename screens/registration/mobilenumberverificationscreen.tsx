import { Box, Icon, Input, InputField, SafeAreaView, Select, SelectBackdrop, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { BellDotIcon, ChevronDownIcon, MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, PrimaryInputBox, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";
import { PinayPalLogoAndTextWhite } from "../../components/AppIcon";
import { SelectContent } from "@gluestack-ui/themed";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";


export const MobileRegistrationVerificationScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Box h={"100%"} px={30} py={24} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                        <Box flex={1} mt={verticalScale(54)} borderWidth={"$0"}>
                            <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins-SemiBold' textAlign="left" width={"100%"} color="#333">Verify you mobile number</Text>
                            <Text mt={verticalScale(36)} lineHeight={24} fontSize={16} fontFamily='Poppins-Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                                {`Please input the six-digit code that was sent to your mobile number via text.`}</Text>
                            <Text mt={12}>
                                <Text fontFamily='Poppins-Regular' color="#333">Haven't received anything? </Text>
                                <Text fontFamily="Poppins-Bold" color="#333">RESEND</Text>
                            </Text>
                        </Box>
                        <Box flex={1} justifyContent="center" alignContent="space-between" borderWidth={"$0"}>
                            <Box flexDirection="row">
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                                <Box flex={1} m={2}>
                                    <Input style={styles.InputBoxStyle} alignSelf="stretch" size="xl" bg="$white" borderRadius={8}>
                                        <InputField textAlign={"center"} type="text" keyboardType="numeric" color="#676f82" fontSize={16} maxLength={1} />
                                    </Input>
                                </Box>
                            </Box>
                        </Box>
                        <Box flex={1} justifyContent="flex-end" borderWidth={"$0"} w={"100%"}>
                            <Box borderWidth={"$0"}>
                                <PrimaryButton label={"Verify"} onPress={() => { 
                                    navigation.navigate("EmailScreen");
                                }} />
                            </Box>
                            <Box mt={20} borderWidth={"$0"}>
                                <SecondaryButton label={"Go Back"} onPress={() => { 
                                    navigation.goBack();
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
    }
});










