import React, {Component} from 'react'
import {
  Container,
  Content,
  Footer,
  Right,
  Text,
  Left,
  Button,
  Form,
  Item,
  Input,
  Textarea,
  Label
} from 'native-base'
import {connect} from 'react-redux'
import Header from './../../components/SteeperHeader'
import NumericInput from 'react-native-numeric-input'
class LeftData extends Component {
  constructor() {
    super()
    this.state = {
      brand: null,
      description: null,
      quantity: null,
    }
  }
  changueText(key, value) {
    console.log(key,value)
    let state = {}
    state[key] = value
    this.setState(state)
  }
  render() {
    return (
      <Container>
        <Header title='Descripción'/>
        <Content>
          <Form style={{marginHorizontal: 10, marginRight: 15}}>
            <Item floatingLabel>
              <Label>Marca</Label>
              <Input onChangeText={(e) => this.changueText('brand', e)} />
            </Item>
            <Textarea 
            style={{marginLeft: 10, marginTop: 10}} 
            rowSpan={5} bordered placeholder="Descripción" />
            <NumericInput onChange={value => this.changueText('quantity' ,value)} />
          </Form>
        </Content>
        <Footer style={{backgroundColor: '#34495e'}}>
          <Left>
          <Button transparent>
              <Text style={{color: '#fff', fontSize: 14}}>Cancelar</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Text style={{color: '#fff', fontSize: 14}}>Crear</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    )
  }
}

export default connect()(LeftData)