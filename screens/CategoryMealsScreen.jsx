import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { MEALS } from '../data/dummyData';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { id, title } = route.params;

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(id) >= 0
  );

  const renderMealItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={displayMeals}
      renderItem={renderMealItem}
    />
  );
};

export default CategoryMealsScreen;
