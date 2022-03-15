import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomButton from '../components/CustomButton';
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
      <View style={[styles.image]}>
        <Image
          source={require('../assets/BarbellRow.gif')}
          style={{width: 300, height: 200}}
          resizeMode={('cover', 'center')}
        />
      </View>
      <View>
        <CustomButton />
      </View>
      {/* <View>
        <ModalScreen />
      </View> */}
      <View>
        <Pressable onPress={onPressButton} style={[styles.button]}>
          <Text style={styles.text}>운동 끝내기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {alignItems: 'center'},
  button: {
    height: 40,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Weight5;
