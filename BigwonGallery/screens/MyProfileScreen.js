import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import IconRightButton from '../components/IconRightButton';
import Profile from '../components/Profile';
import {useUserContext} from '../contexts/UserContext';
import {signOut} from '../lib/auth';

function MyProfileScreen() {
  const {user} = useUserContext();
  const navigation = useNavigation();

  const onLogOut = () => {
    // navigation.navigate('SignIn');
    console.log('logout 전');
    signOut();
    console.log('logout 후');
  };

  useEffect(() => {
    navigation.setOptions({
      title: user.displayName,
    });
  }, [navigation, user]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconRightButton onPress={() => onLogOut()} name="logout" />
      ),
    });
  }, [navigation]);

  return <Profile userId={user.id} />;
}

export default MyProfileScreen;
