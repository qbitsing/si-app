import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Container,
  Content,
  Icon
} from 'native-base'


class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarOnPress: () => {
      const sesion = navigation.getParam('sesion')
      if (sesion) {
        navigation.navigate('Profile')
      } else {
        navigation.navigate('BeforeLogin')
      }
      },
      title: 'Perfil',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="person" style={{color: tintColor}}/>
      }
    }
  }
  render() {
    const {sesion} = this.props.redux
    const {navigation} = this.props
    return (
      <Container>
        <Content>
          <Text>Hola {sesion ? sesion.name : 'Desconocido'}</Text>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state.app
  }
}

export default connect(mapStateToProps)(Profile)
