import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';

function End({route}) {
  const {finishTime} = route.params;
  return (
    <SafeAreaView>
      <Text>축하합니다 운동을 {finishTime} 만큼 완료하였습니다.</Text>
    </SafeAreaView>
  );
}

export default End;
