import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import StopWatchButton from '../components/StopWatchButton';
import {TimeContext} from './TimeStack';

function Weight1() {
  const {startYn, setStartYn} = useContext(TimeContext);

  const navigation = useNavigation();

  const onPress = () => {
    setStartYn(!startYn);
    navigation.navigate('Weight2');
  };
  return (
    <SafeAreaView>
      <Button title="다음" onPress={onPress} />
      <StopWatchButton startYn={startYn} />
    </SafeAreaView>
  );
}

export default Weight1;
