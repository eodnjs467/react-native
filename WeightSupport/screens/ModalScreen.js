import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import CutdownTimer from '../components/CutdownTimer';

function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  //useContext로 현재 타이머 상태로 모달창 자동 열고닫고 하면 될듯
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>휴식시간 입니다.</Text>
            <CutdownTimer />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>창 닫기 || 휴식중단</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable
          style={[styles.button, styles.buttonOpen, {flex: 0.3}]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.leftTextStyle}>타이머</Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            styles.buttonOpen,
            {
              marginLeft: 10,
              flex: 0.6,
            },
          ]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.rightTextStyle}> {}00 세트 완료</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    marginTop: 22,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  leftTextStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalScreen;
