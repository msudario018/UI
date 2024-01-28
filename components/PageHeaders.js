const { Image, Box, ImageBackground, Text, View, HStack, Button, Icon } = require('@gluestack-ui/themed');
import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from './ScaleHelper';
import { ArrowLeftIcon } from 'lucide-react-native';

export const PageHeaderPink = ({label = "PinayPal"}) => {
    return (
        <Box style={styles.pageheader} $ios-h={verticalScale(106)} $android-h={verticalScale(116)}>
            <View w="100%">
                <ImageBackground style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-end" }} h={verticalScale(92)}
                    resizeMode='cover' source={require("../assets/icons/bg-hearts-wide.png")} flexDirection='row'>
                    <Box h={verticalScale(64)} justifyContent='center'>
                        <Button w={horizontalScale(42)} h={verticalScale(42)} $android-h={verticalScale(50)} $android-w={horizontalScale(42)} bgColor="#ef5da8"
                            borderRadius={"$full"} variant='solid' borderWidth={"$0"}  >
                            <ArrowLeftIcon size='500%' strokeWidth={4} color={"#fff"} />
                        </Button>
                    </Box>
                    <Image alt="pinaypal-icon" resizeMode='contain' h={verticalScale(64)}
                        source={require('../assets/icons/pp-logo-white-2.png')} borderWidth="$0" borderColor="$green900" />
                    <Text h={verticalScale(64)} fontSize={"$4xl"} color={"$white"} fontFamily='Poppins-Regular' paddingTop={verticalScale(36)}
                        borderWidth="$0" borderColor="$green900">{label}</Text>
                </ImageBackground>
            </View>
        </Box>
    );
}

const styles = StyleSheet.create({
    pageheader: {
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        backgroundColor: "#ffb9c6",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 19,
        paddingVertical: 16,
        flexDirection: "row",
    }
});
