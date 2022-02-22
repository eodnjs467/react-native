import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import ProfileScreen from './ProfileScreen';
import PostScreen from './PostScreen';

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={FeedScreen} name="Feed" />
      <Stack.Screen component={ProfileScreen} name="Profile" />
      <Stack.Screen
        component={PostScreen}
        name="Post"
        options={{title: '게시물'}}
      />
    </Stack.Navigator>
  );
}

export default HomeStackScreen;
