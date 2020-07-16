// App.js

import React from 'react'
import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail'
import Favorites from './Components/Favorites'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
export default class App extends React.Component {

  TabNav() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={Search} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    );
  }
  
  
  render() {
    return (
      <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche" component={Search} />
        <Stack.Screen name="FilmDetail" component={FilmDetail} />
        <Stack.Screen name="TabNav" component={this.TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    )
  }
}

