import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { Ionicons } from '@expo/vector-icons';

import { MealsStack } from './navigation/MealsStack';
import Colors from './constants/Colors';
import { FavoritesStack } from './navigation/FavoritesStack';

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({size, color}) => tabBarIconMapper(route.name, size, color),
        })}
        tabBarOptions={{ activeTintColor: Colors.secondary }}
      >
        <Tab.Screen name="Meals" component={MealsStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
      </Tab.Navigator>
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
