import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={FeedScreen} name="Feed" />
      <Stack.Screen component={ProfileScreen} name="Profile" />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
