import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Container,
  Content,
  Icon
} from 'native-base'

import Footer from '../../components/FooterTabs'

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Perfil',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="person" style={{color: '#fff'}}/>
      }
    }
  }
  render() {
    const {navigation} = this.props
    const {sesion} = this.props.redux
    console.log(sesion)
    return (
      <Container>
        <Content>
          <Text>Hola {sesion.name}</Text>
        </Content>
        <Footer activeTab="Profile" navigation={navigation}/>
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
