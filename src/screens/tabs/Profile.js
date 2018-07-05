import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Container,
  Content,
  Tab,
  Tabs,
  List,
  ListItem,
  Icon,
  Body,
  Right,
  Thumbnail,
} from 'native-base';
import {
  StyleSheet,
  View
} from 'react-native'


class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      tabBarOnPress: () => {
      const sesion = navigation.getParam('sesion')
      if (sesion) {
        navigation.navigate('Profile')
      } else {
        navigation.navigate('BeforeLogin')
      }
      },
      title: 'Perfil',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="person" style={{color: tintColor}}/>
      }
    }
  }
  render() {
    const {sesion} = this.props.redux
    const {navigation} = this.props
    return (
      <Container>
        <Content style={{backgroundColor: '#fff'}}>
          <View style={styles.PhotoCard}>  
              <Text style={styles.name}>{sesion.name}</Text>
              <Thumbnail style={{height:180,width:180, borderRadius:100}} source={{uri: 'http://cdn.revistagq.com/uploads/images/thumbs/201501/brad_pitt_8257_645x485.jpg'}} />
          </View>
        <Tabs initialPage={0}>
          <Tab heading="INFORMACION">
          <List style={{marginTop:0}}>
            <ListItem icon>
              <Body >
                <Text style={{fontSize:17}}>{sesion.email}</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:20, color:'blue' }} name="plane"/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body >
                <Text style={{fontSize:17}}>{sesion.email}</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:20, color:'blue' }} name="plane"/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body >
                <Text style={{fontSize:17}}>{sesion.email}</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:20, color:'blue' }} name="plane"/>
              </Right>
            </ListItem>
          </List>
          </Tab>  
          <Tab heading="MIS SUBASTAS">  
              <Text>Hola user</Text>
          </Tab>  
        </Tabs>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  PhotoCard: {
    height:300,
    backgroundColor:'#3B5998',
    alignItems:'center',
    justifyContent: 'center'
  },
  name: {
    color:'white',
    fontSize:20
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state.app
  }
}

export default connect(mapStateToProps)(Profile)
