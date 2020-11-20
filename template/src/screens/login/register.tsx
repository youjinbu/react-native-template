import React from 'react'
import {Text, Button, Input} from 'components'
import {Container} from './components/container'
import {Card} from './components/card'

export default function RegisterScreen() {
  return (
    <Container>
      <Card
        title='完善您的信息'
        subtitle='昵称需要2-10位，可以用中英文、数字。'
      >
        <Input placeholder='请设置您的昵称' mt='xxxl' />
        <Input placeholder='请选择您的生日' mt='xl' />
        <Button label='完成注册' mt='xl' />
      </Card>
      <Text variant='tiny' mt='m' textAlign='center'>
        您的信息用于为您提供更好的服务，完全保密请放心填写。
      </Text>
    </Container>
  )
}
