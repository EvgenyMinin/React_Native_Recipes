import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from './constants/Colors';
import MealsDrawer from './navigation/meals/MealsDrawer';
import FavoritesDrawer from './navigation/favorites/FavoritesDrawer';

enableScreens();

const BottomTabsNavigator = createBottomTabNavigator();

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
      <BottomTabsNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size, color }) =>
            tabBarIconMapper(route.name, size, color),
        })}
        tabBarOptions={{
          activeTintColor: Colors.secondary,
          activeBackgroundColor:
            Platform.OS === 'android' ? Colors.primary : '',
          inactiveBackgroundColor:
            Platform.OS === 'android' ? Colors.primary : '',
          labelStyle: {
            fontFamily: 'open-sans',
          },
        }}
      >
        <BottomTabsNavigator.Screen name="Meals" component={MealsDrawer} />
        <BottomTabsNavigator.Screen
          name="Favorites"
          component={FavoritesDrawer}
        />
      </BottomTabsNavigator.Navigator>
    </NavigationContainer>
  );
}

const tabBarIconMapper = (route, size, color) => {
  let iconName = '';

  switch (route) {
    case 'Meals':
      iconName = 'ios-restaurant';
      break;
    case 'Favorites':
      iconName = 'ios-star';

    default:
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};
