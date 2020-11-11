import 'react-native-gesture-handler'

import React from 'react'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {ThemeProvider} from '@shopify/restyle'
import {useNavigation, Stack} from 'shared/navigation'
import {theme, useTheme} from 'shared/theme'
import {Text} from 'components'
import SmsVerificationScreen from './login/sms-verification'
import RegisterScreen from './login/register'
import LoginScreen from './login'
import MainScreen from './main'

enableScreens()

const LoginStack = createNativeStackNavigator()

function LoginScreens() {
  const appTheme = useTheme()
  const navigation = useNavigation()

  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'transparent'},
        headerTitle: '登录注册',
        headerBackTitle: '',
        headerTintColor: appTheme.colors.text,
      }}
    >
      <LoginStack.Screen
        name='login'
        component={LoginScreen}
        options={{
          headerLeft: () => (
            <Text onPress={() => navigation.goBack()}>返回</Text>
          ),
        }}
      />
      <LoginStack.Screen
        name='sms-verification'
        component={SmsVerificationScreen}
      />
      <LoginStack.Screen name='register' component={RegisterScreen} />
    </LoginStack.Navigator>
  )
}

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='main'>
          <Stack.Screen
            name='main'
            component={MainScreen}
            options={{headerTitle: '主页'}}
          />
          <Stack.Screen
            name='login-stack'
            component={LoginScreens}
            options={{stackPresentation: 'containedModal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}
