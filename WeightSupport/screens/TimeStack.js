import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Weight1 from './Weight1';
import Weight2 from './Weight2';
import Weight3 from './Weight3';
import Weight4 from './Weight4';
import Weight5 from './Weight5';
import End from './End';

const Stack = createNativeStackNavigator();

export const TimeContext = createContext();

function TimeStack() {
  const [startYn, setStartYn] = useState(false);
  const [finishYn, setFinishYn] = useState(false);
  const [finishTime, setFinishTime] = useState(0);
  return (
    <TimeContext.Provider
      value={{
        startYn,
        setStartYn,
        finishTime,
        setFinishTime,
        finishYn,
        setFinishYn,
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Weight1"
          component={Weight1}
          options={{title: '풀 업'}}
        />
        <Stack.Screen
          name="Weight2"
          component={Weight2}
          options={{title: '원암 덤벨 로우'}}
        />
        <Stack.Screen
          name="Weight3"
          component={Weight3}
          options={{title: '랫 풀 다운'}}
        />
        <Stack.Screen
          name="Weight4"
          component={Weight4}
          options={{title: '시티드 로우'}}
        />
        <Stack.Screen
          name="Weight5"
          component={Weight5}
          options={{title: '바벨 로우'}}
        />
        <Stack.Screen
          name="End"
          component={End}
          options={{headerShown: false}}
          finishTime={finishTime}
        />
      </Stack.Navigator>
    </TimeContext.Provider>
  );
}

export default TimeStack;
