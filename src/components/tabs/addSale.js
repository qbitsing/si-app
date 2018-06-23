import React, {Component} from 'react'
import {
  Container,
  Content,
  Text,
  Form,
  Picker,
  Icon
} from 'native-base'
import {StyleSheet} from 'react-native'
import Footer from './../FooterTabs'
import {connect} from 'react-redux'

class newSale extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subcategories: [],
      categories: this.props.categories,
      subcategoriesSelected: null,
      selected: null
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
          </Form>
        </Content>
        <Footer activeTab="newSale" navigation={navigation}/>
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
    categories: state.categories
  }
}

export default connect(mapStateToProps)(newSale)