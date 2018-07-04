import React, {Component} from 'react'
import {
  Container,
  Content,
  List
} from 'native-base';
import ListItem from './../../components/listItem'

class Categories extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Categorías'
    }
  } 
  render() {
    const categories = [
      {name: 'Tecnología', icon: 'mobile-phone'},
      {name: 'Categoría 2', icon: 'mobile-phone'},
      {name: 'Tecnología', icon: 'facebook'},
      {name: 'Tecnología', icon: 'github'},
      {name: 'Tecnología', icon: 'clipboard'},
    ]
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

export default Categories
