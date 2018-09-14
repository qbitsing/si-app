import React, {Component} from 'react'
import {Text} from 'react-native'
import Card from '../../../components/CardSaler'
import {Container, Content} from 'native-base'
class Active extends Component {
    render() {
        return (
          <Container>
            <Content>
              <Card />
            </Content>
          </Container>
        )
    }
}

export default Active
