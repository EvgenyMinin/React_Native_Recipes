import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../../constants/Colors';

import { FavoritesStack } from './FavoritesStack';
import FiltersStack from '../filters/FiltersStack';

const Drawer = createDrawerNavigator();

const FavoritesDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.secondary,
        labelStyle: { fontFamily: 'open-sans' },
      }}
    >
      <Drawer.Screen name="Favorites" component={FavoritesStack} />
      <Drawer.Screen name="Filters" component={FiltersStack} />
    </Drawer.Navigator>
  );
};

export default FavoritesDrawer;
