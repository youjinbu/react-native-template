import React from 'react'
import 'react-native-gesture-handler'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
// import {createStackNavigator} from '@react-navigation/stack'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import App from '../app'
import MainScreen from './main'
import ProfileScreen from './profile'

enableScreens()

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
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
  )
}
