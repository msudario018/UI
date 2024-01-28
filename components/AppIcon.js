const { Image } = require('@gluestack-ui/themed');
import { horizontalScale, verticalScale } from './ScaleHelper';

export const HeartsBG = () => {
    return (
        <Image alt="bg-hearts" w={horizontalScale(264)} h={verticalScale(90)}
            source={require('../assets/icons/bg-hearts.png')} />
    );
};

export const PinayPalLogoAndTextWhite = () => {
    return (
        <Image alt="PinaypalIconText-white" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-white.png')} />
    );
};

export const PinayPalLogoWhite = () => {
    return (
        <Image alt="PinaypalIcon-white" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-white-2.png')} />
    );
};

export const PinayPalLogoAndTextPink = () => {
    return (
        <Image alt="PinaypalIconText-pink" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo.png')} />
    );
};

export const PinayPalLogoPink = () => {
    return (
        <Image alt="PinaypalIcon-pink" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-2.png')} />
    );
};

