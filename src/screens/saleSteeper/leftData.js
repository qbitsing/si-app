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
  Label,
  View
} from 'native-base'
import http from './../../utils/http'
import mutation from './../../utils/mutations/createSale'
import {StyleSheet} from 'react-native'
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
  handleCreate = async () => {
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: true
    })
    const {brand, description, quantity} = this.state
    const query = mutation({
      brand,
      description,
      quantity,
      subcategory: this.props.newSale.subcategory.id,
      photos: '[]',
      uuidUser: this.props.sesion.uuid
    })
    try {
      console.log(query)
      let res = await http('mutation', query)
      console.log(res)
      res = await res.json()
      console.log(res)
    } catch(e) {
      console.log(e)
    }
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: false
    })
  }
  render() {
    return (
      <Container>
        <Header title='Descripción'/>
        <Content>
          <Form style={styles.Form}>
            <Item floatingLabel>
              <Label>Marca</Label>
              <Input onChangeText={(e) => this.changueText('brand', e)} />
            </Item>
            <Textarea 
            onChangeText={(e) => this.changueText('description', e)}
            style={styles.Textarea} 
            rowSpan={5} bordered placeholder="Descripción" />
            <View style={styles.Textarea}>
              <Text style={{marginBottom: 10}}>Cantidad</Text>
              <View>
                <NumericInput
                onChange={value => this.changueText('quantity' ,value)}
                rounded
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#34495e' 
                leftButtonBackgroundColor='#2c3e50'
                />
              </View>
            </View>
          </Form>
        </Content>
        <Footer style={{backgroundColor: '#34495e'}}>
          <Left>
          <Button transparent>
              <Text style={styles.FooterButtons}>Cancelar</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={this.handleCreate}>
              <Text style={styles.FooterButtons}>Crear</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  FooterButtons: {
    color: '#fff',
    fontSize: 14
  },
  Form: {
    marginHorizontal: 10,
    marginRight: 15
  },
  Textarea: {
    marginLeft: 10,
    marginTop: 10
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    newSale: state.app.newSale,
    sesion: state.app.sesion
  }
}

export default connect(mapStateToProps)(LeftData)
