import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';
import HeaderButton from '../../components/HeaderButton';

import FavoriteMealsScreen from '../../screens/FavoriteMealsScreen';
import MealDetailsScreen from '../../screens/MealDetailsScreen';

const FavoritesStackNavigator = createStackNavigator();

const FavoritesStack = ({ navigation }) => (
  <FavoritesStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerTitleStyle: { fontFamily: 'open-sans' },
      headerBackTitleStyle: { fontFamily: 'open-sans' },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <FavoritesStackNavigator.Screen
      name="Favorite Meals"
      component={FavoriteMealsScreen}
      options={{
        title: 'Your Favorites',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Filters"
              iconName="ios-menu"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          </HeaderButtons>
        ),
      }}
    />
    <FavoritesStackNavigator.Screen
      name="Meal Detail"
      component={MealDetailsScreen}
      options={({ route }) => ({
        headerTitle: route.params.title,
      })}
    />
  </FavoritesStackNavigator.Navigator>
);

export default FavoritesStack;
