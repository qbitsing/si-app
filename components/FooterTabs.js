import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { 
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from 'native-base'

export default class FooterTabs extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.tabs = [
      { icon: 'home', routeName: 'Home', badges: 0 },
      { icon: 'apps', routeName: 'Categories', badges: 0 },
      { icon: 'add', routeName: 'Create', badges: 0 },
      { icon: 'cart', routeName: 'Saler', badges: 3 },
      { icon: 'person', routeName: 'Profile', badges: 0 },
    ]
  }
  go = async (to) => {
    const actualRoute = this.props.navigation.state.routeName
    if (to === actualRoute) return
    if (to === 'Profile') {
      try {
        let sesion = await AsyncStorage.getItem('sesion')
        console.log('estamos aqui')
        sesion = JSON.parse(sesion)
        console.log(sesion)
        if (sesion) this.props.navigation.navigate('Profile')
        else this.props.navigation.navigate('Login')
        return
      } catch(e) {
        console.log(e)
      }
    }
    this.props.navigation.navigate(to)
  }
  render() {
  return (
      <Footer>
        <FooterTab>
          {this.tabs.map((tab, i) => {
          let badgeItem
          const actualRoute = this.props.navigation.state.routeName          
          if (tab.badges) {
            badgeItem = <Badge><Text>2</Text></Badge>
          }
          return (
          <Button 
          key={i}
          active={tab.routeName == actualRoute}
          badge={tab.badges ? true : false}
          onPress={() => this.go(tab.routeName)} 
          vertical
          >
            {badgeItem}
            <Icon name={tab.icon} />
          </Button>
          )})}
        </FooterTab>
      </Footer>
    )
  }
}