import React, {Component} from 'react'
import {
  Container,
  Content,
  List,
  Icon
} from 'native-base'
import {connect} from 'react-redux'
import ListItem from './../../components/listItem'

class Categories extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Categorías',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="apps" style={{color:tintColor}}/>
      }
    }
  } 
  render() {
    const {categories} = this.props
    return(
      <Container style={{backgroundColor: 'white'}}>
        <Content>
          <List dataArray={categories} 
          renderRow={(item) => <ListItem item={item}/>}>
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

export default connect(mapStateToProps)(Categories)
