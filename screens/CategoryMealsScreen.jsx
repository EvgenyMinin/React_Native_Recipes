import React from 'react';
import { Button, Text } from 'react-native';

import Center from '../components/Center';

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <Center>
      <Text>Category Meals</Text>
      <Button
        title="Go To Details"
        onPress={() => navigation.navigate('Meal Detail')}
      />
    </Center>
  );
};

export default CategoryMealsScreen;
