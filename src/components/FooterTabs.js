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
import { connect } from 'react-redux'

class FooterTabs extends Component {
  constructor (props) {
    super(props)
    this.tabs = [
      { icon: 'home', routeName: 'Home', badges: 0 },
      { icon: 'apps', routeName: 'Categories', badges: 0 },
      { icon: 'add', routeName: 'Create', badges: 0 },
      { icon: 'cart', routeName: 'Saler', badges: 5 },
      { icon: 'person', routeName: 'Profile', badges: 0 },
    ]
  }
  componentWillMount() {
    console.log(this.props.activeTab)
  }
  go = async (to) => {
    const { navigation } = this.props
    const actualRoute = navigation.state.routeName
    if (to === actualRoute) return
    if (to === 'Profile') {
      try {
        const data = {uuid: '123d-dsd-123da', name: 'Nicolás Arias'}
        console.log(data)
        await AsyncStorage.removeItem('sesion')
        // await AsyncStorage.setItem('sesion', JSON.stringify(data))
        let sesion = await AsyncStorage.getItem('sesion')
        console.log(sesion)
        sesion = JSON.parse(sesion)
        if (sesion) {
          navigation.navigate('Profile')
        }
        else navigation.navigate('BeforeLogin')
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
            badgeItem = <Badge><Text>{tab.badges}</Text></Badge>
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

function mapStateToProps(state = {}, props) {
  return {
    ...props,
    changueTab: (activeTab) => {
      state.dispatch({
        type: 'SET_ACTIVE_TAB',
        payload: {
          activeTab
        }
      })
    },
    activeTab: state.activeTab
  }
}

export default connect(mapStateToProps)(FooterTabs)