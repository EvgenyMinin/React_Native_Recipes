import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';

import { MealsStack } from './navigation/MealsStack';
import FavoriteMealsScreen from './screens/FavoriteMealsScreen';

enableScreens();

const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen name="Meals" component={MealsStack} />
        <Tab.Screen name="Favorites" component={FavoriteMealsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
