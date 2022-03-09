import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Weight4() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Weight4</Text>
      <Button title="다음" onPress={() => navigation.navigate('Weight5')} />
    </SafeAreaView>
  );
}

export default Weight4;
