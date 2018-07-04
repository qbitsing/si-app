import React, {Component} from 'react'
import {
  Container,
  Content,
  Text,
  Form,
  Picker,
  Icon,
  Textarea,
  Button,
  Item,
  Input
} from 'native-base'
import http from './../../utils/http'
import mutation from './../../utils/mutations/createSale'
import ImagePicker from 'react-native-image-picker'
import {StyleSheet} from 'react-native'
import {connect} from 'react-redux'

class newSale extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Subastar',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="add" style={{color: '#fff'}}/>
      }
    }
  } 
  constructor(props) {
    super(props)
    this.state = {
      subcategories: [],
      categories: this.props.categories,
      subcategoriesSelected: "",
      selected: "",
      description: "",
      quantity: 0,
      brand: ""
    }
  }
  onCategorieChange(value) {
    this.setState({
      subcategoriesSelected: null,
      selected: value,
    })
    let subcategories = this.state.categories.filter(el => el.id === value)[0]
    console.log(subcategories)
    subcategories = subcategories.children_categories
    this.setState({
      subcategories
    })
  }
  onSubcategorieChange(value) {
    this.setState({
      subcategoriesSelected: value
    })
  }
  selectImage() {
    console.log(ImagePicker)
    let options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)
    
      if (response.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }
      else {
        console.log(response)
      }
    })
  }

  async create() {
    
  }
  changeText = (e, element) => {
    const state = {}
    state[element] = e
    this.setState(state)
  }
  render() {
    const {categories} = this.state
    const {subcategories} = this.state
    const {navigation} = this.props
    return (
      <Container>
        <Content style={{backgroundColor: '#fff'}}>
          <Text>Nueva Subasta</Text>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Categoría"
              placeholder="Categoría"
              iosIcon={<Icon name="arrow-dropdown-circle"
                  style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onCategorieChange.bind(this)}
            >
              {
                categories.map((el, i) => {
                  return <Picker.Item key={i} label={el.name} value={el.id} />
                })
              }
            </Picker>

            <Picker
              mode="dropdown"
              iosHeader="Subcategoría"
              placeholder="Subcategoría"
              iosIcon={<Icon name="arrow-dropdown-circle"
                  style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.subcategoriesSelected}
              onValueChange={this.onSubcategorieChange.bind(this)}
            >
              {
                subcategories.map((el, i) => {
                  return <Picker.Item key={i} label={el.name} value={el.id} />
                })
              }
            </Picker>
            <Item regular>
              <Input
              onChangeText={(e) => this.changeText(e, 'brand')}
              value={this.state.brand}
              placeholder="Marca"
              selectionColor="#eee" />
            </Item>
            <Textarea
            value={this.state.description}
            rowSpan={5}
            onChangeText={(e) => this.changeText(e, 'quantity')}
            bordered 
            placeholder="Descripcion" />
            <Item regular>
              <Input
                placeholder="Cantidad"
                onChangeText={(e) => this.changeText(e, 'quantity')}
                value={this.state.quantity}
                selectionColor="#eee" />
            </Item>
            <Button onPress={this.selectImage} light>
              <Text> Subir Foto </Text>
            </Button>
            <Button onPress={this.create} full light>
              <Text> Crear Subasta </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({

})

function mapStateToProps(state, props) {
  console.log(state)
  return {
    ...props,
    categories: state.app.categories
  }
}

export default connect(mapStateToProps)(newSale)