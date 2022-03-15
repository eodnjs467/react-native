import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Timer} from 'react-native-progress-timer';
import {SafeAreaView} from 'react-native-safe-area-context';

function PercentCircle() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Timer
            remainingTime={10}
            size={350}
            showsText={true}
            animated={true}
            direction={'counter-clockwise'}
            borderColor={'#d9dcdd'}
            borderWidth={3}
            thickness={5}
            color={'#faac02'}
            style={options.style}
            textStyle={options.textStyle}
            options={options}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const options = {
  style: {
    margin: 'auto',
  },
  textStyle: {
    color: '#000000',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  highlight: {
    backgroundColor: '#ffffff',
  },
  play: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  cancel: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
  },
});
export default PercentCircle;
