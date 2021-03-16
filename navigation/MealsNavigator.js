import { createAppContainer, createStackNavigator } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);
