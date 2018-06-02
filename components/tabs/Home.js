import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import CardComponent from './../CardComponent'

class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" style={{color: tintColor}} />
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CardComponent/>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Home