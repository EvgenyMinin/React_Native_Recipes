import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import HeaderButton from '../../components/HeaderButton';

import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryMealsScreen from '../../screens/CategoryMealsScreen';
import MealDetailsScreen from '../../screens/MealDetailsScreen';

const MealsStackNavigator = createStackNavigator();

export const MealsStack = ({ navigation }) => (
  <MealsStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerTitleStyle: { fontFamily: 'open-sans' },
      headerBackTitleStyle: { fontFamily: 'open-sans' },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    }}
  >
    <MealsStackNavigator.Screen
      name="Meal Categories"
      component={CategoriesScreen}
      options={{
        title: 'Meal Categories',
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
