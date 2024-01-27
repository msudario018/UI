import { GluestackUIProvider, Text, Box, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import { PrimaryButton, SecondaryButton } from './components/Buttons';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center" paddingTop="30%">
        <PrimaryButton label="Login" onPress={() => console.log('Button Pressed')} /> 
        <SecondaryButton label="Register" onPress={() => console.log('Button Pressed')} /> 
      </Box>
    </GluestackUIProvider>
  );
}