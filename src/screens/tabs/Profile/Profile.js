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
  Left,
  Title,
  Thumbnail,
  Header,
  Button,
} from 'native-base';
import { StyleSheet,  AsyncStorage, View } from 'react-native'
import { Poppins, PoppinsSemiBold } from '../../../utils/Fonts'
import {NavigationActions, StackActions} from 'react-navigation'

class Profile extends Component {
  
  signOut = async () => {
    let x = await AsyncStorage.removeItem('sesion')
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabsNavigator' }),
        NavigationActions.navigate({ routeName: 'BeforeLogin' })
      ],
    })
    this.props.dispatch({
      type: 'SET_SESION', 
      payload: null
    })
    this.props.dispatch(resetAction)
  }

  render() {
    let {sesion} = this.props.redux
    sesion = sesion === null ? {} : sesion
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon type='FontAwesome' name="bars"/>
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#fff'}}>
          <View style={styles.PhotoCard}>  
              <Text style={styles.name}>{sesion.name}</Text>
              <Thumbnail style={{height:100,width:100, borderRadius:100}} source={{uri: 'http://cdn.revistagq.com/uploads/images/thumbs/201501/brad_pitt_8257_645x485.jpg'}} />
          </View>
        <Tabs initialPage={0}>
          <Tab heading="INFORMACION">
          <List style={{marginTop:0}}>
            <ListItem icon>
              <Body >
                <Text style={styles.ListItem}>{sesion.email}</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:20, color:'blue' }} name="plane"/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body >
                <Text style={styles.ListItem}>{sesion.email}</Text>
              </Body>
              <Right>
                <Icon style={{fontSize:20, color:'blue' }} name="plane"/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Body >
                <Text style={styles.ListItem}>{sesion.email}</Text>
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
    height:190,
    backgroundColor:'#3B5998',
    alignItems:'center',
    justifyContent: 'center'
  },
  name: {
    color:'white',
    fontFamily: Poppins,
    fontSize:20
  },
  ListItem: {
    fontSize: 17,
    fontFamily: Poppins
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state.app
  }
}

export default connect(mapStateToProps)(Profile)
