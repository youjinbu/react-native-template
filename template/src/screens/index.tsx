import 'react-native-gesture-handler'

import React from 'react'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {ThemeProvider} from '@shopify/restyle'
import App from '../app'
import MainScreen from './main'
import ProfileScreen from './profile'
import {theme} from '../theme'

enableScreens()

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='index'>
          <Stack.Screen
            name='index'
            component={App}
            options={{headerShown: false}}
          />
          <Stack.Screen name='main' component={MainScreen} />
          <Stack.Screen
            name='profile'
            component={ProfileScreen}
            options={{stackPresentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
