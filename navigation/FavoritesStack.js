import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import FavoriteMealsScreen from '../screens/FavoriteMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const FavoritesStackNavigator = createStackNavigator();

export const FavoritesStack = () => (
  <FavoritesStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <FavoritesStackNavigator.Screen
      name="Favorite Meals"
      component={FavoriteMealsScreen}
      options={{
        title: 'Your Favorites',
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