import { Box, SafeAreaView, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

import { MapPinnedIcon } from "lucide-react-native";
import { PrimaryButton, SecondaryButton } from "../../components/FormElements";
import { verticalScale } from "../../components/ScaleHelper";
import { useEffect, useState } from "react";

import * as Location from 'expo-location';
import { GetUserCountryLocation, SetLocationPermissions } from "../../services/LocationService";


export const LocationEnableScreen = ({ navigation }) => {

    const AllowLocationServices = async () => {
        let status = await SetLocationPermissions();

        if (status !== Location.PermissionStatus.GRANTED) {
            console.error('Permission to access location was denied');
            return;
        }

        let location = await GetUserCountryLocation();
        console.log(location);

        navigation.navigate("NotificationEnableScreen");
    };

    return (
        <SafeAreaView>
            <LinearGradient start={[0.6, 0.5]} end={[0.5, 1]} locations={[0, 0.7]} colors={['#ffb9c6', 'rgba(255, 255, 255, 0)']} >
                <Box h={"100%"} px={30} py={24} flexDirection="column" justifyContent="space-between">
                    <Box flex={1} alignItems="center" alignSelf="stretch" py={36} borderWidth={"$0"}>
                        <MapPinnedIcon color="#fff" size={136} />
                        <Text mt={verticalScale(54)} lineHeight={36} fontSize={28} fontFamily='Poppins-SemiBold' textAlign="left" width={"100%"} color="#333">{`Allow PinayPal to use                      
your location?`}</Text>
                        <Text mt={verticalScale(54)} lineHeight={24} fontSize={20} fontFamily='Poppins-Regular' textAlign="left" width={"100%"} color="#333" borderWidth={"$0"}>
                            {`Our use of location services helps us find the most suitable match for you.`}</Text>
                    </Box>
                    <Box flex={1} justifyContent="flex-end" mt={36} borderWidth={"$0"} w={"100%"}>
                        <Box borderWidth={"$0"}>
                            <PrimaryButton label={"Allow Location Services"} onPress={AllowLocationServices} />
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