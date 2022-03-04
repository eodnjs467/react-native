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
import SelectMuscle from './SelectMuscle';

function SignInScreen() {
  const navigation = useNavigation();
  // this.state = false;

  // const googleSignInConfigure = () => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '268065806597-jemmmkvafuofupa0q8pfljs9sv256lp0.apps.googleusercontent.com',
  //     offlineAccess: true,
  //     hostedDomain: '',
  //     forceConsentPrompt: true,
  //   });
  // };

  // useEffect(() => {
  //   googleSignInConfigure();
  // });

  // const signIn = async () => {
  //   try {
  //     console.info('눌렸다 일단');
  //     await GoogleSignin.hasPlayServices();
  //     console.info('2');
  //     const userInfo = await GoogleSignin.signIn();
  //     console.info('3');
  //     this.setState({userInfo, loggedIn: true});
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     this.setState({user: null, loggedIn: false}); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const onGoogleButtonPress = async () => {
  //   const {idToken} = await GoogleSignin.signIn();
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   return auth().signInWithCredential(googleCredential);
  // };

  const onNextButton = () => {
    navigation.navigate('SelectMuscle');
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Image style={styles.image} source={require('../assets/Logo.png')} />
      <Text>위 사진 글씨 health Support!로 대체</Text>
      <Button title="시작하기" onPress={onNextButton} />
      {/* <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn()}
      /> */}
      {/* <View style={styles.buttonContainer}>
        {!this.state.loggedIn && <Text>You are currently logged out</Text>}
        {this.state.loggedIn && <Button title="Signout" color="#841584" />}
      </View> */}

      {/* <GoogleSigninButton
        style={styles.GButton}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress()}
      /> */}
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
