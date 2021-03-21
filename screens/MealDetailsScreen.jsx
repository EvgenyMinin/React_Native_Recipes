import React from 'react';
import { Text } from 'react-native';

import Center from '../components/Center';
import { MEALS } from '../data/dummyData';

const MealDetailsScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <Center>
      <Text>{selectedMeal.title}</Text>
    </Center>
  );
};

export default MealDetailsScreen;
