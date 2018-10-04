import React, {Component} from 'react'
import {createDrawerNavigator, DrawerItems, StackActions, NavigationActions} from 'react-navigation'
import Profile from './Profile'
import EditProfile from './EditProfile'
import {connect} from 'react-redux'
import { Image, StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { Icon, Container, Content, Header, Body} from 'native-base'
import Ripple from 'react-native-material-ripple'

async function signOut (props) {
	let x = await AsyncStorage.removeItem('sesion')
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'TabsNavigator' }),
        NavigationActions.navigate({ routeName: 'BeforeLogin' })
      ],
    })
    props.dispatch({
      type: 'SET_SESION', 
      payload: null
    })
    props.dispatch(resetAction)
}

const customDrawerComponent = connect()((props) => (
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
			<Ripple rippleDuration={600} onPress={() => signOut(props)}>
				<View style={styles.cerrarSesionItem}>
					<Icon style={{color: "#192a56", marginRight: 25}} type='FontAwesome' name="sign-out" />
					<Text style={{color: "#192a56", fontWeight: "600", fontSize: 14}} >Cerrar sesion</Text>
				</View>
			</Ripple>
		</Content>
	</Container>
));

const drawerConfig = {
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	contentComponent: customDrawerComponent,
	drawerToggleRoute: 'DrawerToggle'
}
const routeConfig = {
	Perfil: {
		screen: Profile,
		navigationOptions: {
			title: 'Perfil',
			drawerIcon: ({tintColor}) => (
				<Icon style={{color: tintColor}} type='FontAwesome' name="user"/>
			)
		}
	},
	EditProfile: {
		screen: EditProfile,
		navigationOptions: {
			title: 'Editar perfil',
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
