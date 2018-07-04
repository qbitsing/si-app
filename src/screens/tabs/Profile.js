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
        console.log(navigation.getParam('sesion'))
       navigation.navigate('Profile')
      },
      title: 'Perfil',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="person" style={{color: '#fff'}}/>
      }
    }
  }
  // componentWillMount () {
  //   console.log('hola')
  //   this.props.navigation.setParams({
  //     sesion: this.props.redux.sesion
  //   })
  // }
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
