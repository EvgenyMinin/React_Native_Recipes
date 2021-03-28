import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { FavoritesStack } from './FavoritesStack';
import FiltersStack from '../filters/FiltersStack';

const Drawer = createDrawerNavigator();

const FavoritesDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Favorites" component={FavoritesStack} />
      <Drawer.Screen name="Filters" component={FiltersStack} />
    </Drawer.Navigator>
  );
};

export default FavoritesDrawer;
