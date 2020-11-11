import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from 'react-native-screens/native-stack'
import {StackScreenProps} from '@react-navigation/stack'
import {useNavigation as useNavigationNative} from '@react-navigation/native'

export type RootStackParamList = {
  main: undefined
  login: undefined
  register: undefined
  'login-stack': undefined
  'sms-verification': {tel: string}
}

export type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>

export const Stack = createNativeStackNavigator<RootStackParamList>()

export function useNavigation() {
  return useNavigationNative<NativeStackNavigationProp<RootStackParamList>>()
}
