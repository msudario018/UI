import { Button, ButtonText, Image, VStack } from '@gluestack-ui/themed';

export const PrimaryButton = ({ label, onPress }) => {
  return (
    <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="rgba(255, 185, 198, 0.5)">
      <ButtonText color='#000' fontSize="$md" fontFamily="Poppins-Regular">{label}</ButtonText>
    </Button>
  );
};

export const SecondaryButton = ({ label, onPress }) => {
  return (
    <>
      <Button onPress={onPress} size='lg' action="secondary" borderRadius="$full" bg="#fff">
        <ButtonText color='#000' fontSize="$md" fontFamily="Poppins-Regular">{label}</ButtonText>
      </Button>
    </>
  );
}; 

export const PrimaryInputBox = () => {
  
}