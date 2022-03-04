import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SelectMuscle() {
  const [weightList, setWeightList] = useState([
    {id: 1, text: '등', checkYn: false},
    {id: 2, text: '가슴', checkYn: false},
    {id: 3, text: '어깨', checkYn: false},
    {id: 4, text: '하체', checkYn: false},
    {id: 5, text: '팔', checkYn: false},
  ]);

  const onPressButton = id => {
    console.info('click id: ', id);
    const nextWeightList = weightList.map(list =>
      list.id === id ? {...list, checkYn: !list.checkYn} : list,
    );
    setWeightList(nextWeightList);
    console.info(weightList[1].checkYn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.block} onPress={() => onPressButton(1)}>
        {weightList[0].checkYn ? (
          <Icon name="check" size={30} color="black" style={styles.checkYn} />
        ) : (
          console.info('')
        )}
        <Text style={styles.text}>등</Text>
      </Pressable>
      <Pressable style={styles.block} onPress={() => onPressButton(2)}>
        {weightList[1].checkYn ? (
          <Icon name="check" size={30} color="black" style={styles.checkYn} />
        ) : (
          console.info('')
        )}
        <Text style={styles.text}>가슴</Text>
      </Pressable>
      <Pressable style={styles.block} onPress={() => onPressButton(3)}>
        {weightList[2].checkYn ? (
          <Icon name="check" size={30} color="black" style={styles.checkYn} />
        ) : (
          console.info('')
        )}
        <Text style={styles.text}>어깨</Text>
      </Pressable>
      <Pressable style={styles.block} onPress={() => onPressButton(4)}>
        {weightList[3].checkYn ? (
          <Icon name="check" size={30} color="black" style={styles.checkYn} />
        ) : (
          console.info('')
        )}
        <Text style={styles.text}>하체</Text>
      </Pressable>
      <Pressable style={styles.block} onPress={() => onPressButton(5)}>
        {weightList[4].checkYn ? (
          <Icon name="check" size={30} color="black" style={styles.checkYn} />
        ) : (
          console.info('')
        )}
        <Text style={[styles.text, !weightList[4].checkYn && {flex: 1}]}>
          팔
        </Text>
      </Pressable>

      <Button
        style={styles.button}
        title="next"
        onPress={console.info('next')}
      />

      {/* <Button title="가슴" onPress={onPressButton} />
      <Button title="어깨" onPress={onPressButton} />
      <Button title="하체" onPress={onPressButton} />
      <Button title="팔" onPress={onPressButton} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  block: {
    width: 300,
    height: 50,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 4,
  },
  checkYn: {
    flex: 3,
    marginLeft: 15,
  },
  button: {},
});

export default SelectMuscle;
