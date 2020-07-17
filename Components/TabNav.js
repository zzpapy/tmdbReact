import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from './Search'
import Favorites from './Favorites'


const Tab = createBottomTabNavigator()

function TabNav() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    );
  }

  export default TabNav