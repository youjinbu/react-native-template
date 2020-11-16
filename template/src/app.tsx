import 'react-native-gesture-handler'

import React from 'react'
import {StatusBar, Platform} from 'react-native'
import {enableScreens} from 'react-native-screens'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {ThemeProvider} from '@shopify/restyle'
import {useNavigation, Stack} from 'shared/navigation'
import {theme, useTheme} from 'shared/theme'
import {Text} from 'components'
import SmsVerificationScreen from './screens/login/sms-verification'
import RegisterScreen from './screens/login/register'
import LoginScreen from './screens/login'
import MainScreen from './screens/main'

enableScreens()

const LoginStack = createNativeStackNavigator()

function LoginScreens() {
  const appTheme = useTheme()
  const navigation = useNavigation()

  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#f2f2f2'},
        headerTitle: '登录注册',
        headerBackTitle: '',
        headerHideShadow: true,
        headerTintColor: appTheme.colors.text,
      }}
    >
      <LoginStack.Screen
        name='login'
        component={LoginScreen}
        options={Platform.select({
          ios: {
            headerLeft: () => (
              <Text onPress={() => navigation.goBack()}>返回</Text>
            ),
          },
        })}
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
    <>
      <StatusBar
        translucent={true}
        barStyle='dark-content'
        backgroundColor='transparent'
      />
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
              options={{
                stackPresentation: 'containedModal',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
}
