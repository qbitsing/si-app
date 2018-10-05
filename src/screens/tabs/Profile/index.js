import React, {Component} from 'react'
import {createStackNavigator } from 'react-navigation'
import Profile from './Profile'
import EditProfile from './EditProfile'
import { Icon } from 'native-base'


const drawerConfig = {
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false
	}
}
const routeConfig = {
	Pro: Profile,
	EditProfile,
}

const Drawer = createStackNavigator(routeConfig, drawerConfig)

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
