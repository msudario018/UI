import { Button, ButtonText } from '@gluestack-ui/themed';
import { horizontalScale, verticalScale } from './ScaleHelper';
//import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export const PrimaryButton = ({label, onPress}) => {
    return (
        <Button onPress={onPress} size='lg' action="primary" borderRadius="$full" bg="rgba(255, 185, 198, 0.5)">
          <ButtonText color='#000' fontSize="$md" fontFamily='po'>{label}</ButtonText>
        </Button>
    );
};

export const SecondaryButton = ({label, onPress}) => {
  return (
      <Button onPress={onPress} size='lg' action="secondary" borderRadius="$full" bg="#fff" >
        <ButtonText color='#000' fontSize="$md">{label}</ButtonText>
      </Button>
  );
};