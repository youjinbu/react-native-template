import React from 'react'
import {Input, Button, Text} from 'components'
import {useNavigation} from 'shared/navigation'
import {Container} from './components/container'
import {Card} from './components/card'

export default function LoginScreen() {
  const navigation = useNavigation()

  return (
    <Container>
      <Card
        title='手机号登录注册'
        source={{
          uri:
            'https://github.com/facebook/react-native/raw/master/Libraries/NewAppScreen/components/logo.png',
        }}
      >
        <Input mt='xl' placeholder='请输入手机号' />
        <Button
          mt='m'
          width='100%'
          label='下一步'
          onPress={() =>
            navigation.navigate('sms-verification', {tel: '12345678901'})
          }
        />
      </Card>

      <Text variant='tiny' mt='s' textAlign='center'>
        登录注册即代表同意 HelloWorld 用户协议 隐私政策
      </Text>
    </Container>
  )
}
