import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Weight2() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Weight2</Text>
      <Button title="다음" onPress={() => navigation.navigate('Weight3')} />
    </SafeAreaView>
  );
}

export default Weight2;
