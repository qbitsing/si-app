import React, {Component} from 'react'
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import Profile from './Profile'
import EditProfile from './EditProfile'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Icon, Container, Content, Header, Body} from 'native-base'
import Ripple from 'react-native-material-ripple'

const customDrawerComponent = props => (
	<Container>
		<Header style={styles.headerDrawer}>
			<Body>
				<Image 
				style={styles.drawerImage} 
				source={{
					uri: 'https://www.shareicon.net/download/2016/07/11/794350_miscellaneous_512x512.png'
				}}/>
			</Body>
		</Header>
		<Content>
			<DrawerItems {...props} />
			<Ripple rippleDuration={600}>
				<View style={styles.cerrarSesionItem}>
					<Icon style={{color: "#e74c3c", marginRight: 25}} type='FontAwesome' name="sign-out" />
					<Text style={{color: "#e74c3c", fontWeight: "600", fontSize: 14}} >Cerrar Sesion</Text>
				</View>
			</Ripple>
		</Content>
	</Container>
);

const drawerConfig = {
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	contentComponent: customDrawerComponent,
	drawerToggleRoute: 'DrawerToggle'
}
const routeConfig = {
	Perfil: {
		screen: Profile,
		name: 'Perfil',
		navigationOptions: {
			drawerIcon: ({tintColor}) => (
				<Icon style={{color: tintColor}} type='FontAwesome' name="user"/>
			)
		}
	},
	EditProfile: {
		screen: EditProfile,
		name: 'Editar Perfil',
		navigationOptions: {
			drawerIcon: ({tintColor}) => (
				<Icon style={{color: tintColor}} type='FontAwesome' name="edit"/>
			)
		}
	}
}

const Drawer = createDrawerNavigator(routeConfig, drawerConfig)

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

const styles = StyleSheet.create({
	drawerImage: {
		height: 150,
		width: 150,
		alignSelf: 'center',
		flex: 1,
		resizeMode: 'contain'
	},
	cerrarSesionItem: {
		flex: 1,
		paddingVertical: 10,
		margin: 0,
		paddingHorizontal: 16,
		alignItems: 'center',
		flexDirection: 'row'
	},
	headerDrawer: {
		height: 200,
		backgroundColor: '#fff',
	}
})

export default ProfileGeneralComponent
