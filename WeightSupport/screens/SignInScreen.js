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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function SignInScreen() {
  const navigation = useNavigation();

  const onNextButton = () => {
    navigation.navigate('SelectMuscle');
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Image style={styles.image} source={require('../assets/Logo.png')} />
      {/* <Text>위 사진 글씨 health Support!로 대체</Text> */}
      {/* Icon.Button -> facebook and google, github 추가 */}
      <Pressable onPress={onNextButton} style={styles.button}>
        <Text style={styles.buttonText}>시작하기</Text>
      </Pressable>
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
    marginBottom: 20,
  },
  GButton: {
    width: 312,
    height: 48,
  },
  button: {
    backgroundColor: 'green',
    width: '50%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SignInScreen;
