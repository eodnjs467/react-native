import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import SelectMuscle from './SelectMuscle';
import TimeStack from './TimeStack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName='TimeStack'>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SelectMuscle"
        component={SelectMuscle}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TimeStack" component={TimeStack} />
    </Stack.Navigator>
  );
}

export default RootStack;
