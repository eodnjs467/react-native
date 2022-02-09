import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useReducer, useState} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import TransParentCircleButton from './TransparentCircleButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const initialState = {mode: 'date', visible: false};
function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function WriteHeader({onSave, onAskRemove, isEditing, date, onChangeDate}) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const open = mode => dispatch({type: 'open', mode});
  const close = () => dispatch({type: 'close'});

  // const [mode, setMode] = useState('date');
  // const [visible, setVisible] = useState(false);

  // const onPressDate = () => {
  //   setMode('date');
  //   setVisible(true);
  // };

  // const onPressTime = () => {
  //   setMode('time');
  //   setVisible(true);
  // };

  const onConfirm = selectedDate => {
    close();
    onChangeDate(selectedDate);
  };

  // const onCancel = () => {
  //   setVisible(false);
  // };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransParentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransParentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <TransParentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>

      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              loacle: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPres={() => open('time')}>
          <Text>{format(new Date(date), 'p', {loacle: ko})} </Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
