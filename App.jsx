import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import Colors from './constants/Colors';
import { Platform } from 'react-native';

const MealsStack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <MealsStack.Navigator>
        <MealsStack.Screen
          name="Meal Categories"
          component={CategoriesScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor:
                Platform.OS === 'android' ? Colors.primary : 'white',
            },
            headerTintColor:
              Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
        />
        <MealsStack.Screen
          name="Meal Category"
          component={CategoryMealsScreen}
        />
        <MealsStack.Screen name="Meal Detail" component={MealDetailsScreen} />
      </MealsStack.Navigator>
    </NavigationContainer>
  );
}
