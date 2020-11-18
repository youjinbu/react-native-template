import React from 'react'
import {Platform, ScrollView, KeyboardAvoidingView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export const Container: React.FC = ({children}) => (
  <KeyboardAvoidingView
    style={{flex: 1}}
    keyboardVerticalOffset={60}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <SafeAreaView
      style={Platform.select({ios: {flex: 1}})}
      edges={['left', 'right', 'bottom']}
    >
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  </KeyboardAvoidingView>
)
