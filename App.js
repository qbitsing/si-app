import React from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'
import { TabNavigator, TabBarBottom } from 'react-navigation'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

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
    Home: { screen: HomeScreen },
    Categories: { screen: SettingsScreen },
    New: { screen: SettingsScreen },
    Sales: { screen: SettingsScreen },
    Profile: { screen: SettingsScreen },
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
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
