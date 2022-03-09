import React, {useEffect} from 'react';
import {Text, StyleSheet, Image, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

function SignInScreen() {
  const navigation = useNavigation();

  const onNextButton = () => {
    navigation.navigate('SelectMuscle');
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Image style={styles.image} source={require('../assets/Logo.png')} />
      {/* <Text>위 사진 글씨 health Support!로 대체</Text> */}
      <Button title="시작하기" onPress={onNextButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    width: '90%',
    height: '10%',
    resizeMode: 'stretch',
  },
  GButton: {
    width: 312,
    height: 48,
  },
});

export default SignInScreen;
