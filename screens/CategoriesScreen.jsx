import React from 'react';
import { Button, Text } from 'react-native';

import Center from '../components/Center';

const CategoriesScreens = ({ navigation }) => {
  return (
    <Center>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          navigation.navigate('CategoryMeals');
        }}
      />
    </Center>
  );
};

export default CategoriesScreens;
