import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Box, Text, Button} from 'components'
import {useNavigation} from 'shared/navigation'
import MainScreen from 'screens/main'
import ProfileScreen from 'screens/profile'

const BottomTab = createBottomTabNavigator()
const EmptyComponent = () => null

export function MainNavigator() {
  const navigation = useNavigation()
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: Platform.select({android: {height: 58}}),
      }}
    >
      <BottomTab.Screen
        name='main'
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => <Text>{focused ? '🏠' : '🏡'}</Text>,
        }}
      />
      <BottomTab.Screen
        name='create'
        component={EmptyComponent}
        options={{
          tabBarButton: () => (
            <Box justifyContent='center'>
              <Button
                label='+'
                height={30}
                width={30}
                borderRadius={15}
                onPress={() => navigation.navigate('login-stack')}
              />
            </Box>
          ),
        }}
      />
      <BottomTab.Screen
        name='profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <Text>{focused ? '👨' : '👶'}</Text>,
        }}
      />
    </BottomTab.Navigator>
  )
}
