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
  next (item) {
    this.props.dispatch({
      type: 'SET_NEWSALE_ITEM',
      payload: {
        subcategorie: item
      }
    })
  }
  render () {
    const {name, children_categories} = this.props.newSale.categorie
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header style={{ backgroundColor: '#34495e' }}androidStatusBarColor="#2c3e50">
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 14}}>{name}</Title>
          </Body>
        </Header>
        <Content>
          <List dataArray={children_categories} 
          renderRow={(item) => <ListItem select={this.next} item={item}/>}>
          </List>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    newSale: state.app.newSale
  }
}

export default connect(mapStateToProps)(CategoriesSelection)
