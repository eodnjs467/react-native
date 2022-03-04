import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import SelectMuscle from './SelectMuscle';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}

export default RootStack;
