import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import Center from '../components/Center';
import MealList from '../components/MealList';

const FavoriteMealsScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <>
      {favoriteMeals.length === 0 ? (
        <Center>
          <Text>You haven't any favorite meals yet</Text>
        </Center>
      ) : (
        <MealList listData={favoriteMeals} navigation={navigation} />
      )}
    </>
  );
};

export default FavoriteMealsScreen;
