import { Box, SafeAreaView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { BellDotIcon, MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";


export const NotificationEnableScreen = () => {
    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <Box h={"100%"} px={30} py={24} flexDirection="column" justifyContent="space-between">
                    <Box flex={1} alignItems="center" alignSelf="stretch" py={36} borderWidth={"$0"}>
                        <BellDotIcon color="#fff" size={136} />
                        <Text mt={verticalScale(54)} lineHeight={36} fontSize={28} fontFamily='Poppins-SemiBold' textAlign="left" width={"100%"} color="#333">{`Allow PinayPal to send
you notifications?`}</Text>
                        <Text mt={verticalScale(54)} lineHeight={24} fontSize={20} fontFamily='Poppins-Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                            {`We aim to notify you whenever you receive new likes and messages.`}</Text>
                    </Box>
                    <Box flex={1} justifyContent="flex-end" mt={36} borderWidth={"$0"} w={"100%"}>
                        <Box borderWidth={"$0"}>
                            <PrimaryButton label={"Allow Notifications"} onPress={() => { }} />
                        </Box>
                        <Box mt={20} borderWidth={"$0"}>
                            <SecondaryButton label={"Go Back"} onPress={() => { }} />
                        </Box>
                    </Box>
                </Box>
            </LinearGradient>
        </SafeAreaView>
    );
}