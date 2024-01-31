import { GluestackUIProvider, Text, Box, Button, ButtonText, VStack, SafeAreaView, View, ImageBackground } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import { PrimaryButton, SecondaryButton } from './components/FormElements';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { verticalScale } from './components/ScaleHelper';
import { HeartsBG, PinayPalLogoAndTextPink, PinayPalLogoAndTextWhite, PinayPalLogoPink, PinayPalLogoWhite } from './components/AppIcon';
import { FloatingActionBar } from './components/FloatingActionBar';
import { PageHeaderPink } from './components/PageHeaders';
import IndexScreen from './screens/indexscreen';
import LoginScreen from './screens/loginscreen';
import KeyboardAvoidingComponent from './screens/keyboardavoidscreen';
import { LocationEnableScreen } from './screens/registration/locationenablescreen';
import { NotificationEnableScreen } from './screens/registration/notificationenablescreen';
import { RegistrationStartScreen } from './screens/registration/registrationstartscreen';
import { MobileRegistrationScreen } from './screens/registration/mobilenumberscreen';
import { MobileRegistrationVerificationScreen } from './screens/registration/mobilenumberverificationscreen';
import { EmailRegistrationScreen } from './screens/registration/emailscreen';
import { EmailRegistrationVerificationScreen } from './screens/registration/emailverificationscreen';
//import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIProvider config={config} onLayoutRootView={onLayoutRootView}>
        <RegistrationStartScreen />
    </GluestackUIProvider>
  );
}