import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { Platform } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import Colors from './constants/Colors';


enableScreens();

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
      <MealsStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primary : 'white',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }}
      >
        <MealsStack.Screen
          name="Meal Categories"
          component={CategoriesScreen}
          options={{
            title: 'Overview',
          }}
        />
        <MealsStack.Screen
          name="Meal Category"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
        <MealsStack.Screen name="Meal Detail" component={MealDetailsScreen} />
      </MealsStack.Navigator>
    </NavigationContainer>
  );
}
