import React from 'react';

import { MEALS } from '../data/dummyData';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
