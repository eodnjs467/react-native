import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import ModalScreen from './ModalScreen';

function Weight3() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={[styles.image]}>
        <Image
          source={require('../assets/LatPulldown.gif')}
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
        <Button title="다음" onPress={() => navigation.navigate('Weight4')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {alignItems: 'center'},
});

export default Weight3;
