import React from 'react'
import {Platform, ScrollView, KeyboardAvoidingView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export const Container: React.FC = ({children}) => (
  <KeyboardAvoidingView
    style={{flex: 1}}
    keyboardVerticalOffset={100}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  </KeyboardAvoidingView>
)
