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
import { MobileRegistrationScreen } from './screens/registration/mobilenumberscreen';
import { MobileRegistrationVerificationScreen } from './screens/registration/mobilenumberverificationscreen';
import { EmailRegistrationScreen } from './screens/registration/emailscreen';
import { EmailRegistrationVerificationScreen } from './screens/registration/emailverificationscreen';
import { ConfirmationModal } from './components/ConfirmationModals';
import { RegistrationStartScreen } from './screens/registration/registrationstartscreen';
import { WelcomeScreenPal } from './screens/welcomescreenpal';
import { WelcomeScreenPinay } from './screens/welcomescreenpinay';
import { FullNameScreen } from './screens/fullnamescreen';
import { BirthDateScreen } from './screens/birthdatescreen';
import { AboutYourselfScreen } from './screens/aboutyourselfscreen';
import { RegistrationNavigationFlowScreen } from './screens/registration/registrationnavigationscreen';
import { NoticeScreen } from './screens/questionaire/noticescreen';
import { QuestionOneScreen } from './screens/questionaire/q1screen';
import { QuestionTwoScreen } from './screens/questionaire/q2screen';
import { QuestionThreeScreen } from './screens/questionaire/q3screen';
import { QuestionFourScreen } from './screens/questionaire/q4screen';
import { QuestionFiveScreen } from './screens/questionaire/q5screen';
import { QuestionSixScreen } from './screens/questionaire/q6screen';
import { QuestionSevenScreen } from './screens/questionaire/q7screen';
import { QuestionEightScreen } from './screens/questionaire/q8screen';
import { QuestionNineScreen } from './screens/questionaire/q9screen';
import { QuestionTenScreen } from './screens/questionaire/q10screen';
import { QuestionElevenScreen } from './screens/questionaire/q11screen';
import { QuestionTwelveScreen } from './screens/questionaire/q12screen';
import { QuestionThirteenScreen } from './screens/questionaire/q13screen';
import { FinishScreen } from './screens/questionaire/finishscreen';
import { FinishPinayScreen } from './screens/finishpinayscreen';
import { FinishPalScreen } from './screens/finishpalscreen';
import { QuestionaireNavigationFlowScreen } from './screens/questionaire/questionairenavigationscreen';
//import MainPageAndroidScreen from './screens/mainpageandroidscreen';
//import { InterestScreen } from './screens/interestscreen';
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
        <QuestionaireNavigationFlowScreen/>
    </GluestackUIProvider>
  );
}