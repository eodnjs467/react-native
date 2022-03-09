import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Weight3() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Weight3</Text>
      <Button title="다음" onPress={() => navigation.navigate('Weight4')} />
    </SafeAreaView>
  );
}

export default Weight3;
