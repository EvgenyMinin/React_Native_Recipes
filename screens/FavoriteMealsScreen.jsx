import React from 'react';
import { useSelector } from 'react-redux';

import Center from '../components/Center';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';

const FavoriteMealsScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <>
      {favoriteMeals.length === 0 ? (
        <Center>
          <DefaultText>You haven't any favorite meals yet</DefaultText>
        </Center>
      ) : (
        <MealList listData={favoriteMeals} navigation={navigation} />
      )}
    </>
  );
};

export default FavoriteMealsScreen;
