import React from 'react';
import { Button, Text } from 'react-native';

import Center from '../components/Center';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { title } = route.params;

  return (
    <Center>
      <Text>Category Meals</Text>
      <Text>{title}</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Meal Detail')}
      />
    </Center>
  );
};

export default CategoryMealsScreen;
