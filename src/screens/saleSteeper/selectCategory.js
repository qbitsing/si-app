import React, {Component} from 'react'
import {
  Container,
  Content,
  List
} from 'native-base'
import Header from './../../components/SteeperHeader'
import ListItem from './../../components/listItem'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'

class CategoriesSelection extends Component {

  goToSubCategorie = (item) => {
    this.props.dispatch({
      type: 'SET_NEWSALE_ITEM',
      payload: {
        categorie: item
      }
    })
    this.props.navigation.navigate('SubCategorieSelect')
  }

  handleBack = () => {
    this.props.dispatch(NavigationActions.back())
  }

  render () {
    const {categories} = this.props
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Header handleBack={this.handleBack} icon='times' title='Selecciona la Categoría'/>
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
