import React, { Component } from 'react'
import {
  AsyncStorage,
  TextInput,
  View
} from 'react-native'
import {
  Text,
  Icon,
  Button
} from 'native-base'
import api from '../../utils/http'
import loginQuery from '../../utils/queries/login'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      sesion: null
    }
  }
  changeUSername = (username) => {
    this.setState({
      username
    })
  }
  changePassword = (password) => {
    this.setState({
      password
    })
  }
  submit = async () => {
    this.props.navigation.navigate('Login')
    // let data = {
    //   email: this.state.username,
    //   password: this.state.password
    // }
    // let res = await api('query', loginQuery(data))
    // res = await res.json()
    // if(!res.erros) {
    //   let sesion = JSON.stringify(res.data.singin)
    //   AsyncStorage.setItem('sesion', sesion)
    //   console.warn('sesion guardada')
    // } else {
    //   console.warn(res.erros)
    // }
  }
  componentDidMount = async () =>  {
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      sesion = JSON.parse(sesion)
      console.warn(sesion)
      this.setState({
        sesion
      })
    } catch (e) {
      console.warn(e)
    }
  }
  static navigationOptions = ({navigation}) =>{
    return {
      tabBarOnPress: ev => {
        console.warn('123')
      // navigation.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
      // navigation.navigate('Login')
      ev.jumpToIndex(ev.scene.index)
      // this.props.navigation.navigate('Login')
    },
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}} />
    )
    }
  }
  hola = 123
  render() {
    if (!this.state.sesion) {
      // this.props.navigation.navigate('Login')
      return (<View><Text>Go to login</Text></View>)
    } else {
      return (
        <View>
          <Text>Profile View</Text>
        </View>
      )
    }
  }
}

export default Profile
