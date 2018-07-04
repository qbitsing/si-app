import React, {Component} from 'react'
import {Container, Content, Text, Segment, Button} from 'native-base'
import Footer from './../../components/FooterTabs'


class Saler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 1
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
        <Footer activeTab="Saler" navigation={this.props.navigation}/>
      </Container>
    )
  }
}

export default Saler
