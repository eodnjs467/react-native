import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SelectMuscle() {
  const [selectedId, setSelectedId] = useState(null);
  const [weightList, setWeightList] = useState([
    {id: 1, title: '등', checkYn: false},
    {id: 2, title: '가슴', checkYn: false},
    {id: 3, title: '어깨', checkYn: false},
    {id: 4, title: '하체', checkYn: false},
    {id: 5, title: '팔', checkYn: false},
  ]);
  const navigation = useNavigation();

  const WeightItem = ({item, onPress, backgroundColor, textColor, checkYn}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      {/* <Text>{console.info(weightList)}</Text> */}
    </TouchableOpacity>
  );

  const renderItem = ({item, checkYn}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'aquamarine';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <WeightItem
        item={item}
        onPress={() => setSelectedId(item.id)} //setSelectedId(item.id)
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        checkYn
      />
    );
  };

  const onPressButton = () => {
    navigation.navigate('TimeStack');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={weightList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <Button title="next" onPress={onPressButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: 314,
    height: 24,
    backgroundColor: 'aquamarine',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SelectMuscle;
