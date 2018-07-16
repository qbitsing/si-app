import React, {Component} from 'react'
import {
  Container,
  Content,
  List,
  Icon,
  Header,
  Text,
  Body
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
    console.log(this.props.sesion)
    const {categories} = this.props
    return(
      <Container style={{backgroundColor: 'white'}}>
        <Header>
          <Body>
            <Text>{this.props.sesion ? this.props.sesion.name : 'hola'}</Text>
          </Body>
        </Header>
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
    categories: state.app.categories,
    sesion: state.app.sesion
  }
}

export default connect(mapStateToProps)(Categories)
