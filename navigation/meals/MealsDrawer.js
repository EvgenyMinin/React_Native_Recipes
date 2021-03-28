import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MealsStack } from './MealsStack';
import FiltersStack from '../filters/FiltersStack';

const Drawer = createDrawerNavigator();

const MealsDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meals" component={MealsStack} />
      <Drawer.Screen name="Filters" component={FiltersStack} />
    </Drawer.Navigator>
  );
};

export default MealsDrawer;
