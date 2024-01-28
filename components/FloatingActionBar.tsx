import { Box, Button, ButtonIcon, ButtonText, HStack } from '@gluestack-ui/themed';
import { InfinityIcon, CircleUserRoundIcon, MessageCircleMoreIcon, HeartIcon } from 'lucide-react-native';
import { horizontalScale, verticalScale } from './ScaleHelper';
import { StyleSheet } from 'react-native';


export const FloatingActionBar = () => {
    return (
        <Box style={styles.actionbar} justifyContent='center' alignItems='center'>
            <HStack space='xs'>
                <Button w="23%" h={verticalScale(52)} variant='outline' borderWidth="$0" borderRadius="$full">
                    <InfinityIcon size={48} strokeWidth={2} color="#939393" />
                </Button>
                <Button w="23%" h={verticalScale(52)} variant='outline' borderWidth="$0" borderRadius="$full">
                    <HeartIcon size={32} strokeWidth={2} color="#939393" />
                </Button>
                <Button w="23%" h={verticalScale(52)} variant='outline' borderWidth="$0" borderRadius="$full">
                    <MessageCircleMoreIcon size={32} strokeWidth={2} color="#939393" />
                </Button>
                <Button w="23%" h={verticalScale(52)} variant='outline' borderWidth="$0" borderRadius="$full">
                    <CircleUserRoundIcon size={32} strokeWidth={2} color="#939393" />
                </Button>
            </HStack>
        </Box>
    );
};

const styles = StyleSheet.create({
    actionbar: {
        borderRadius: 100,
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 3,
        elevation: 4,
        shadowOpacity: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        height: 80,
    }
});