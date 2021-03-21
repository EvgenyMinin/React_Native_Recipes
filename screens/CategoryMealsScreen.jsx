import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummyData';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  const renderMealItem = ({ item }) => (
    <MealItem
      title={item.title}
      image={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      onSelectMeal={() =>
        navigation.navigate('Meal Detail', {
          mealId: item.id,
          title: item.title,
        })
      }
    />
  );

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={displayMeals}
      renderItem={renderMealItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 14,
    backgroundColor: 'white',
  },
});

export default CategoryMealsScreen;
