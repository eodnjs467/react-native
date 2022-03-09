import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StopWatchButton from '../components/StopWatchButton';
import End from './End';
import {TimeContext} from './TimeStack';

function Weight5() {
  const {startYn, setStartYn, finishTime, setFinishYn} =
    useContext(TimeContext);
  const navigation = useNavigation();

  const onPressButton = () => {
    setStartYn(!startYn);
    setFinishYn(true);
    navigation.push('End', {finishTime: finishTime});
  };

  return (
    <SafeAreaView>
      <Text>Weight5</Text>
      <Button title="완료!" onPress={onPressButton} />
    </SafeAreaView>
  );
}

export default Weight5;
