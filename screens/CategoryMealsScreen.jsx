import React from 'react';
import { useSelector } from 'react-redux';

import Center from '../components/Center';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const { id } = route.params;

  const displayMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  return displayMeals.length === 0 ? (
    <Center>
      <DefaultText>No meals found, maybe check your filters?</DefaultText>
    </Center>
  ) : (
    <MealList listData={displayMeals} navigation={navigation} />
  );
};

export default CategoryMealsScreen;
