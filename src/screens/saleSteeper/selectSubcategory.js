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
        subcategory: item
      }
    })
    this.props.navigation.navigate('LeftData')
  }

  handleBack = () => this.props.navigation.goBack()

  render () {
    const {name, children_categories} = this.props.newSale.category
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header handleBack={this.handleBack} title={name}/>
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
