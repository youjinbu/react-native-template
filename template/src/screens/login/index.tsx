import React, {useState} from 'react'
import * as WebBrowser from 'expo-web-browser'
import {Input, Button, Text} from 'components'
import {useNavigation} from 'shared/navigation'
import {usePrompt} from 'shared/hooks'
import {Container} from './components/container'
import {Card} from './components/card'

export default function LoginScreen() {
  const navigation = useNavigation()
  const [phone, setPhone] = useState('')
  const prompt = usePrompt()

  function onSubmit() {
    if (phone) {
      navigation.navigate('sms-verification', {tel: phone})
    } else {
      prompt.show('Invalid Phone Number')
    }
  }

  function openUrl(url: string) {
    WebBrowser.openBrowserAsync(url)
  }

  return (
    <Container>
      <Card
        title='手机号登录注册'
        source={{
          uri:
            'https://github.com/facebook/react-native/raw/master/Libraries/NewAppScreen/components/logo.png',
        }}
      >
        <Input
          mt='xl'
          placeholder='请输入手机号'
          onChangeText={setPhone}
          options={{
            onSubmitEditing: onSubmit,
            returnKeyType: 'next',
            keyboardType: 'numeric',
            clearButtonMode: 'while-editing',
            dataDetectorTypes: 'phoneNumber',
          }}
        />
        <Button mt='m' width='100%' label='下一步' onPress={onSubmit} />
      </Card>

      <Text variant='tiny' mt='s' textAlign='center'>
        登录注册即代表同意 HelloWorld{' '}
        <Text variant='tinyLink' onPress={() => openUrl('https://google.com')}>
          用户协议
        </Text>{' '}
        <Text
          variant='tinyLink'
          onPress={() => openUrl('https://duckduckgo.com')}
        >
          隐私政策
        </Text>
      </Text>
    </Container>
  )
}
