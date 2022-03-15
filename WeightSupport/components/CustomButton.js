import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ModalScreen from '../screens/ModalScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DATA = [
  {
    id: 1,
    weight: 30,
    times: 12,
    check: true,
  },
  {
    id: 2,
    weight: 30,
    times: 12,
    check: false,
  },
  {
    id: 3,
    weight: 30,
    times: 12,
    check: false,
  },
  {
    id: 4,
    weight: 30,
    times: 12,
    check: false,
  },
];

function CustomButton() {
  const [addData, setData] = useState(DATA);
  const onAddSet = () => {
    setData([
      ...addData,
      {id: addData.length + 1, weight: 30, times: 12, check: false},
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={addData}
        renderItem={({item}) => (
          <View style={styles.block}>
            <Text style={[styles.text, styles.textInput]}>{item.id}세트</Text>
            <TextInput
              style={styles.textInput}
              defaultValue={`${item.weight}`}
            />
            <Text style={[styles.text, styles.textInput]}>kg</Text>
            <TextInput
              style={styles.textInput}
              defaultValue={`${item.times}`}
            />
            <Text style={[styles.text, styles.textInput]}>회</Text>
            <Text style={[styles.text, styles.textInput]}>
              {item.check === true ? <Icon name="check" size={25} /> : null}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.addBlock}>
        <Pressable style={[styles.addSetButton]} onPress={onAddSet}>
          <Icon
            name="add-circle-outline"
            size={25}
            style={[styles.textInput, styles.buttonIcon]}
          />
          <Text style={[styles.textInput, styles.buttonText]}>세트 추가</Text>
        </Pressable>
      </View>
      <ModalScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 450,
    justifyContent: 'center',
  },
  block: {
    height: 50,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  textInput: {
    color: 'white',
    fontWeight: 'bold',
  },
  addBlock: {
    alignItems: 'center',
    backgroundColor: 'dimgray',
    borderWidth: 1,
    borderColor: 'gainsboro',
  },
  addSetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonIcon: {
    marginRight: 10,
  },
});

export default CustomButton;
