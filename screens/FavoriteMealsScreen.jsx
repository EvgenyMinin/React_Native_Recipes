import React from 'react';
import { Button, Text } from 'react-native';

import { MEALS } from '../data/dummyData';

import MealList from '../components/MealList';

const FavoriteMealsScreen = ({ navigation }) => {
  const favoriteMealList = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );
  return <MealList listData={favoriteMealList} navigation={navigation} />;
};

export default FavoriteMealsScreen;
