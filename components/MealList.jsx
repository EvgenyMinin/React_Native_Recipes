import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';
import Center from './Center';

const MealList = ({ listData, navigation }) => {
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
    <Center>
      <FlatList
        keyExtractor={({ id }) => id}
        data={listData}
        renderItem={renderMealItem}
        style={styles.container}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 14,
    backgroundColor: 'white',
  },
});

export default MealList;
