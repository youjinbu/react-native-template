import React from 'react'
import {Platform} from 'react-native'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {useNavigation} from 'shared/navigation'
import {useTheme} from 'shared/theme'
import SmsVerificationScreen from 'screens/login/sms-verification'
import RegisterScreen from 'screens/login/register'
import LoginScreen from 'screens/login'
import {Text} from 'components'

const LoginStack = createNativeStackNavigator()

export function LoginNavigator() {
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
