import React, {Component} from 'react'
import {Container, Text, Icon, Tab, Tabs} from 'native-base'
import Active from './active'
import History from './history'
import InProgress from './inProgress'

class Saler extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = () => {
    return {
      title: 'Proveedor',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="cart" style={{color: tintColor}}/>
      }
    }
  }


  render() {
    return(
      <Container>
        <Tabs>
          <Tab heading="Activas">
            <Active />
          </Tab>
          <Tab heading="En Curso">
            <InProgress />
          </Tab>
          <Tab heading="Histoiral">
            <History />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Saler
