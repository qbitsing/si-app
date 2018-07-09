import React, {Component} from 'react'
import {
  Container,
  Content,
  List
} from 'native-base'
import ListItem from './../../components/listItem'
import Header from './../../components/SteeperHeader'
import {connect} from 'react-redux'

class CategoriesSelection extends Component {
  next = (item) => {
    this.props.dispatch({
      type: 'SET_NEWSALE_ITEM',
      payload: {
        subcategorie: item
      }
    })
    this.props.navigation.navigate('LeftData')
  }
  render () {
    const {name, children_categories} = this.props.newSale.categorie
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header title={name}/>
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
