import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const { id } = route.params;

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
