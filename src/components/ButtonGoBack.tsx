import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

const ButtonGoBack = ({
  iconName = 'chevron-back-outline',
  size = 30,
  color = '#fff',
}) => {
  const navigation = useNavigation();
  const back = () => {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={back}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 100,
  },
});

export default ButtonGoBack;
