import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';
import {TimeContext} from '../screens/TimeStack';

function StopWatchButton({startYn}) {
  const {setFinishTime, finishYn} = useContext(TimeContext);

  return (
    <View>
      <Stopwatch
        start={startYn}
        reset={finishYn}
        msecs
        getTime={time => setFinishTime(time)}
        options={styles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 0,
    height: 0,
  },
});

export default StopWatchButton;
