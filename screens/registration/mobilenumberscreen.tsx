import { Box, Icon, Input, InputField, SafeAreaView, Select, SelectBackdrop, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { ChevronDownIcon, } from "lucide-react-native";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";
import { SelectContent } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";


export const MobileRegistrationScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <Box h={"100%"} px={30} py={24} flexDirection="column" alignContent="space-between" justifyContent="space-between">
                    <Box flex={1} mt={verticalScale(54)} borderWidth={"$0"}>
                        <Text lineHeight={verticalScale(36)} fontSize={28} fontFamily='Poppins-SemiBold' textAlign="left" width={"100%"} color="#333">What's your mobile number?</Text>
                        <Text mt={verticalScale(36)} lineHeight={24} fontSize={16} fontFamily='Poppins-Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                            {`Your mobile number serves as a unique identifier in our app. Rest assured, we do not share your number with anyone.`}</Text>
                    </Box>
                    <Box flex={1} justifyContent="center" borderWidth={"$0"}>
                        <Box flexDirection="row">
                            <Box flex={1.5}>
                                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                    Country
                                </Text>
                                <Select defaultValue="US +1" style={styles.InputBoxStyle} >
                                    <SelectTrigger variant="outline" size="xl" borderWidth={"$0"}>
                                        <SelectInput placeholder="-" fontSize={16} />
                                        <SelectIcon>
                                            <Icon as={ChevronDownIcon} fontSize={12} />
                                        </SelectIcon>
                                    </SelectTrigger>
                                    <SelectPortal>
                                        <SelectBackdrop />
                                        <SelectContent>
                                            <SelectDragIndicatorWrapper>
                                                <SelectDragIndicator />
                                            </SelectDragIndicatorWrapper>
                                            <SelectItem label="US +1" value="+1" />
                                            <SelectItem label="PH +63" value="+63" />
                                        </SelectContent>
                                    </SelectPortal>
                                </Select>
                            </Box>
                            <Box flex={3} marginLeft={8}>
                                <Text alignSelf="stretch" lineHeight={verticalScale(30)} color="#676f82" >
                                    Mobile Number
                                </Text>
                                <Input style={styles.InputBoxStyle} alignSelf="stretch" borderColor="$blueGray700" size="xl" >
                                    <InputField type="text" keyboardType="numeric" color="#676f82" fontSize={16} />
                                </Input>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex={1} justifyContent="flex-end" borderWidth={"$0"} w={"100%"}>
                        <Box borderWidth={"$0"}>
                            <PrimaryButton label={"Continue"} onPress={() => { 
                                navigation.navigate("MobileNumberVerificationScreen");
                            }} />
                        </Box>
                        <Box mt={20} borderWidth={"$0"}>
                            <SecondaryButton label={"Go Back"} onPress={() => { 
                                navigation.goBack();
                            }} />
                        </Box>
                    </Box>
                </Box>
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