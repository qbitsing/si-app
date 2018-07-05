import React, {Component} from 'react'
import {Container, Content, Text, Segment, Button, Icon} from 'native-base'

class Saler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Proveedor',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="cart" style={{color: tintColor}}/>
      }
    }
  }

  setSegment = (seg) => {
    this.setState({
      seg
    })
  }

  render() {
    return(
      <Container>
        <Content>
        <Segment>
          <Button
          active={this.state.seg === 1 ? true : false}
          onPress={() => this.setSegment(1)}
          first>
            <Text>Puppies</Text>
          </Button>
          <Button
          active={this.state.seg === 2 ? true : false}
          onPress={() => this.setSegment(2)} 
          last>
            <Text>Kittens</Text>
          </Button>
        </Segment>
        <Content padder>
        {this.state.seg === 1 && <Text>Segment 1</Text>}
          {this.state.seg === 2 && <Text>Segment 2</Text>}
        </Content>
        </Content>
      </Container>
    )
  }
}

export default Saler
