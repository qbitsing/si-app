import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Home from './views/Home'
import Profile from './views/Profile'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: { screen: Home },
    Categories: { screen: SettingsScreen },
    New: { screen: SettingsScreen },
    Sales: { screen: SettingsScreen },
    Profile: { screen: Profile },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName
        if (routeName === 'Home') {
          iconName = `home`
        } else if (routeName === 'Categories') {
          iconName = 'apps'
        } else if (routeName === 'New') {
          iconName = 'add'
        } else if (routeName === 'Sales') {
          iconName = 'cart'
        } else if (routeName === 'Profile') {
          iconName = 'person'
        }
        return <Icon name={iconName} style={{fontSize: 20, color: tintColor}} />
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
