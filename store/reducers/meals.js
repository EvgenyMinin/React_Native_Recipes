import { MEALS } from '../../data/dummyData';

import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  const { type, mealId } = action;

  switch (type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === mealId
      );

      if (existingIndex >= 0) {
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === mealId);
        return { ...state, favoriteMeals: [...state.favoriteMeals, meal] };
      }

    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals: updatedFilteredMeals };
  }
  return state;
};

export default mealsReducer;
