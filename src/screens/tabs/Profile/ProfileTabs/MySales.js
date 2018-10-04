import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import CardSaler from '../../../../components/CardSaler';

class MySales extends Component {
  render () {
    return (
      <ScrollView>
        <CardSaler />
        <CardSaler />
        <CardSaler />
      </ScrollView>
    )
  }
}

export default MySales 