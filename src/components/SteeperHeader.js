import React from 'react'
import {
  Header,
  Icon,
  Left,
  Title,
  Button,
  Body
} from 'native-base'

function SteeperHeader(props) {
  return (
    <Header
      noLeft={props.noLeft}
      style={{ backgroundColor: '#34495e' }}
      androidStatusBarColor='#2c3e50'>
      <Left>
        <Button transparent onPress={props.handleBack}>
          <Icon type='FontAwesome' name={props.icon || 'chevron-left'} />
        </Button>
      </Left>
      <Body>
        <Title style={{fontSize: 14}}>{props.title}</Title>
      </Body>
    </Header>
  )
}

export default SteeperHeader
