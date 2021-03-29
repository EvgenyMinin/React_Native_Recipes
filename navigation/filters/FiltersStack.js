import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import FiltersScreen from '../../screens/FiltersScreen';
import Colors from '../../constants/Colors';

import HeaderButton from '../../components/HeaderButton';

const FiltersStackNavigator = createStackNavigator();

const filtersStack = ({ navigation }) => {
  return (
    <FiltersStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        },
        headerTitleStyle: { fontFamily: 'open-sans' },
        headerBackTitleStyle: { fontFamily: 'open-sans' },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
    >
      <FiltersStackNavigator.Screen
        name="Filter Meals"
        component={FiltersScreen}
        options={{
          title: 'Filter Meals',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Filters"
                iconName="ios-menu"
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              />
            </HeaderButtons>
          ),
        }}
      />
    </FiltersStackNavigator.Navigator>
  );
};

export default filtersStack;
