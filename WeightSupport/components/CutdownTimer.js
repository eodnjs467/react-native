import React from 'react';
import {View, Text} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

function CutdownTimer() {
  return (
    <View>
      <View>
        <CountdownCircleTimer
          isPlaying
          duration={10}
          // colors="#abcd"
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}>
          {({remainingTime}) => <Text>{remainingTime}</Text>}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}

export default CutdownTimer;
