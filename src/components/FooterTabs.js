import React, { Component } from 'react'
import { 
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from 'native-base'
import { connect } from 'react-redux'

class FooterTabs extends Component {
  constructor (props) {
    super(props)
    this.tabs = [
      { icon: 'home', routeName: 'Home', badges: 0 },
      { icon: 'apps', routeName: 'Categories', badges: 0 },
      { icon: 'add', routeName: 'newSale', badges: 0 },
      { icon: 'cart', routeName: 'Saler', badges: 5 },
      { icon: 'person', routeName: 'Profile', badges: 0 },
    ]
  }
  go = async (to) => {
    const { navigation } = this.props
    const actualRoute = navigation.state.routeName
    if (to === actualRoute) return
    if ((to === 'Profile') || (to === 'newSale')) {
      try {
        if (!this.props.sesion) navigation.navigate('BeforeLogin')
        else navigation.navigate(to)
        return
      } catch(e) {
        console.log(e)
      }
    }
    navigation.navigate(to)
  }
  render() {
  return (
      <Footer>
        <FooterTab>
          {this.tabs.map((tab, i) => {
          let badgeItem
          const actualRoute = this.props.navigation.state.routeName          
          if (tab.badges) {
            badgeItem = <Badge><Text>{tab.badges}</Text></Badge>
          }
          return (
          <Button
          key={i}
          active={tab.routeName == this.props.activeTab}
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

function mapStateToProps(state = {}, props) {
  const {sesion, activeTab} = state
  return {
    ...props,
    sesion
  }
}

export default connect(mapStateToProps)(FooterTabs)