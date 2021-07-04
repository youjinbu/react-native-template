import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack'
import {createNativeStackNavigator} from 'react-native-screens/native-stack'
import {useNavigation as useNavigationNative} from '@react-navigation/native'

export type RootStackParamList = {
  'main-stack': undefined
  'login-stack': undefined
  login: undefined
  register: undefined
  'sms-verification': {tel: string}
}

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export const Stack = createNativeStackNavigator<RootStackParamList>()

export function useNavigation() {
  return useNavigationNative<NativeStackNavigationProp<RootStackParamList>>()
}
