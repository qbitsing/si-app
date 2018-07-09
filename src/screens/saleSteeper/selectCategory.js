import React, {Component} from 'react'
import {
  Container,
  Content,
  List,
  Header,
  Button,
  Left,
  Icon,
  Title,
  Body
} from 'native-base'
import ListItem from './../../components/listItem'

import {connect} from 'react-redux'

class CategoriesSelection extends Component {
  goToSubCategorie (item) {
    
  }
  render () {
    const {categories} = this.props
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header style={{ backgroundColor: '#34495e' }}androidStatusBarColor="#2c3e50">
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 14}}>Selecciona la Categoría</Title>
          </Body>
        </Header>
        <Content>
          <List dataArray={categories} 
          renderRow={(item) => <ListItem select={this.goToSubCategorie} item={item}/>}>
          </List>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    categories: state.app.categories
  }
}

export default connect(mapStateToProps)(CategoriesSelection)
