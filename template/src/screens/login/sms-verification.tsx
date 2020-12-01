import React from 'react'
import {useNavigation, ScreenProps} from 'shared/navigation'
import {Text, Button} from 'components'
import {Container} from './components/container'
import {Card} from './components/card'

export default function SmsVerificationScreen({
  route,
}: ScreenProps<'sms-verification'>) {
  const navigation = useNavigation()

  return (
    <Container>
      <Card
        title='输入手机验证码'
        subtitle={`已发送验证码到${route.params.tel}`}
        source={{
          uri:
            'https://github.com/facebook/react-native/raw/master/Libraries/NewAppScreen/components/logo.png',
        }}
      >
        <Button
          label='下一步'
          my='xl'
          onPress={() => navigation.navigate('register')}
        />
        <Text variant='tiny' textAlign='center'>
          点此重新获取
        </Text>
      </Card>
    </Container>
  )
}
