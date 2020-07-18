// App.js

import React from 'react'
import FilmDetail from './Components/FilmDetail'
import FilmCast from './Components/FilmCast'
import Search from './Components/Search'
import TabNav from './Components/TabNav'
import Acteur from './Components/Acteur'
import Favorites from './Components/Favorites'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
export default class App extends React.Component {

  
  
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Favoris" component={TabNav} /> */}
            <Stack.Screen name="Recherche" component={Search} />
            <Stack.Screen name="FilmDetail" component={FilmDetail} />
            <Stack.Screen name="FilmCast" component={FilmCast} />
            <Stack.Screen name="Acteur" component={Acteur} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

