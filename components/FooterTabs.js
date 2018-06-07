import React, { Component } from 'react'
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
  go = (to) => {
    console.log(to)
  }
  render() {
  return (
      <Footer>
        <FooterTab>
          {this.tabs.map((tab, i) => {
          let badgeItem
          if (tab.badges) {
            badgeItem = <Badge><Text>2</Text></Badge>
          }
          return (
          <Button 
          key={i}
          badge={tab.badges ? true : false}
          onPress={this.go(tab.routeName)} 
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