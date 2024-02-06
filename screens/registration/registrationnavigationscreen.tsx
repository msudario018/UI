import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationEnableScreen } from './locationenablescreen';
import { NotificationEnableScreen } from './notificationenablescreen';
import { MobileRegistrationScreen } from './mobilenumberscreen';
import { MobileRegistrationVerificationScreen } from './mobilenumberverificationscreen';
import { EmailRegistrationScreen } from './emailscreen';
import { RegistrationStartScreen } from './registrationstartscreen';

const Stack = createNativeStackNavigator();

export const RegistrationNavigationFlowScreen = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LocationEnableScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LocationEnableScreen" component={LocationEnableScreen} />
                <Stack.Screen name="NotificationEnableScreen" component={NotificationEnableScreen} />
                <Stack.Screen name="RegistrationStartScreen" component={RegistrationStartScreen} />
                <Stack.Screen name="MobileNumberScreen" component={MobileRegistrationScreen} />
                <Stack.Screen name="MobileNumberVerificationScreen" component={MobileRegistrationVerificationScreen} />
                <Stack.Screen name="EmailScreen" component={EmailRegistrationScreen} />
                <Stack.Screen name="EmailVerificationScreen" component={EmailRegistrationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};