import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function SelectMuscle() {
  const [selectedId, setSelectedId] = useState(null);
  const [weightList, setWeightList] = useState([
    {id: 1, title: '등', checkYn: true},
    {id: 2, title: '가슴', checkYn: false},
    {id: 3, title: '어깨', checkYn: false},
    {id: 4, title: '하체', checkYn: false},
    {id: 5, title: '팔', checkYn: false},
  ]);
  const navigation = useNavigation();

  const WeightItem = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <View style={{flex: 0.4, flexDirection: 'row-reverse'}}>
        {item.id === selectedId ? <Icon name="check" size={25} /> : null}
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
      </View>
      {/* <Text>{console.info(weightList)}</Text> */}
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'lightgray' : 'gray';
    const color = item.id === selectedId ? 'black' : 'white';
    // const backgroundColor = item.checkYn === true ? 'lightgray' : 'gray';
    // const color = item.checkYn === true ? 'black' : 'white';
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
        style={styles.block}
      />
      <Pressable style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const chartWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dimgray',
    alignItems: 'center',
  },
  block: {
    marginTop: '20%',
  },
  item: {
    width: chartWidth,
    height: 50,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    paddingLeft: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '70%',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SelectMuscle;
