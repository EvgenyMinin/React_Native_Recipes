import React from 'react';
import { HeaderButton as HeaderButtonRN } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';

const HeaderButton = (props) => {
  return (
    <HeaderButtonRN
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
      {...props}
    />
  );
};

export default HeaderButton;
