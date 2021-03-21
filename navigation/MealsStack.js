import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

const MealsStackNavigator = createStackNavigator();

export const MealsStack = () => (
  <MealsStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <MealsStackNavigator.Screen
      name="Meal Categories"
      component={CategoriesScreen}
      options={{
        title: 'Overview',
      }}
    />
    <MealsStackNavigator.Screen
      name="Meal Category"
      component={CategoryMealsScreen}
      options={({ route }) => ({
        headerTitle: route.params.title,
      })}
    />
    <MealsStackNavigator.Screen
      name="Meal Detail"
      component={MealDetailsScreen}
      options={({ route }) => ({
        headerTitle: route.params.title,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Favotite"
              iconName="ios-star"
              onPress={() => console.log('add to favorite')}
            />
          </HeaderButtons>
        ),
      })}
    />
  </MealsStackNavigator.Navigator>
);
