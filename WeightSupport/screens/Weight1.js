import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Button, View, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
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
      <View style={[styles.image]}>
        <Image
          source={require('../assets/PullUp.gif')}
          style={{width: 300, height: 200}}
          resizeMode={('cover', 'center')}
        />
      </View>
      <View>
        <CustomButton />
      </View>
      <View>{/* <ModalScreen /> */}</View>
      <View>
        <Button title="다음" onPress={onPress} />
        <StopWatchButton startYn={startYn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {alignItems: 'center'},
});

export default Weight1;
