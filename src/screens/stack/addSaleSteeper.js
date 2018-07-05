import React, {Component} from 'react'
import {Text} from 'react-native'

class Steeper extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null
    }
  }
  render() {
    return <Text>Steeper view</Text>
  }
}

export default Steeper