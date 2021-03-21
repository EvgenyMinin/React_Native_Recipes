import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummyData';

const CategoriesScreens = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() =>
          navigation.navigate('Meal Category', {
            id: item.id,
            title: item.title,
          })
        }
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreens;
