import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import PercentCircle from '../components/PercentCircle';

function End({route}) {
  const {finishTime} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>축하합니다 운동을 {finishTime} 만큼 완료하였습니다.</Text>
      </View>
      <View>
        {/* <PercentCircle /> */}
      </View>
    </SafeAreaView>
  );
}

export default End;
