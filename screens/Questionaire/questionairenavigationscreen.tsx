import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NoticeScreen } from './noticescreen';
import { FinishScreen } from './finishscreen';
import { QuestionOneScreen } from './q1screen';
import { QuestionTwoScreen } from './q2screen';
import { QuestionThreeScreen } from './q3screen';
import { QuestionFourScreen } from './q4screen';
import { QuestionFiveScreen } from './q5screen';
import { QuestionSixScreen } from './q6screen';
import { QuestionSevenScreen } from './q7screen';
import { QuestionEightScreen } from './q8screen';
import { QuestionNineScreen } from './q9screen';
import { QuestionTenScreen } from './q10screen';
import { QuestionElevenScreen } from './q11screen';
import { QuestionTwelveScreen } from './q12screen';
import { QuestionThirteenScreen } from './q13screen';


const Stack = createNativeStackNavigator();

export const QuestionaireNavigationFlowScreen = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='NoticeScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
                <Stack.Screen name="QuestionOneScreen" component={QuestionOneScreen} />
                <Stack.Screen name="QuestionTwoScreen" component={QuestionTwoScreen} />
                <Stack.Screen name="QuestionThreeScreen" component={QuestionThreeScreen} />
                <Stack.Screen name="QuestionFourScreen" component={QuestionFourScreen} />
                <Stack.Screen name="QuestionFiveScreen" component={QuestionFiveScreen} />
                <Stack.Screen name="QuestionSixScreen"  component={QuestionSixScreen}/>
                <Stack.Screen name="QuestionSevenScreen"  component={QuestionSevenScreen}/>
                <Stack.Screen name="QuestionEightScreen"  component={QuestionEightScreen}/>
                <Stack.Screen name="QuestionNineScreen"  component={QuestionNineScreen}/>
                <Stack.Screen name="QuestionTenScreen"  component={QuestionTenScreen}/>
                <Stack.Screen name="QuestionElevenScreen"  component={QuestionElevenScreen}/>
                <Stack.Screen name="QuestionTwelveScreen"  component={QuestionTwelveScreen}/>
                <Stack.Screen name="QuestionThirteenScreen"  component={QuestionThirteenScreen}/>
                <Stack.Screen name="FinishScreen" component={FinishScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};