import React, {Component} from 'react'
import {createBottomTabNavigator} from 'react-navigation'
import Profile from './Profile'
import {
	Icon
} from 'native-base'

const routeConfig = {
	Profile
}

const drawerConfig = {}

const Drawer = createBottomTabNavigator(routeConfig, drawerConfig)

class ProfileGeneralComponent extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			tabBarOnPress: () => {
			const sesion = navigation.getParam('sesion')
			console.log(sesion)
			if (sesion) {
				navigation.navigate('Profile')
			} else {
				navigation.navigate('BeforeLogin')
			}
			},
			title: 'Perfil',
			tabBarIcon: ({tintColor}) => {
				return <Icon name="person" style={{color: tintColor}}/>
			}
		}
	}
	render() {
		return <Drawer/>
	}
}

export default ProfileGeneralComponent
