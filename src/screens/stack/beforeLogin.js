import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native'
import {
  Container,
  Text,
  Button,
  Icon
} from 'native-base'
import {connect} from 'react-redux'
import {blueFacebook} from '../../colors'
import { GoogleSignin } from 'react-native-google-signin';

class BeforeLogin extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <Icon
      onPress={() => navigation.goBack()}
      style={{color: '#fff'}}
      name="close"/>,
      headerStyle: {
        position: 'absolute',
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  }
  go = (to) => this.props.navigation.navigate(to)

  _googleSignIn = async () => {
    console.log('in')
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true })
      console.log('Yes have google services')
    } catch (error) {
      console.log('no google play services', error)
    }
  }

  render() {
    return(
      <Container>
        <StatusBar
        backgroundColor="transparent"
        translucent/>
        <Image
        style={styles.backgroundImage}
        source={{uri: 'https://cdn.pixabay.com/photo/2016/01/29/15/30/car-1168158_960_720.jpg'}}
        />
        <View style={styles.container}>
          <Image
          style={styles.logo}
          source={{uri: 'https://vignette.wikia.nocookie.net/logopedia/images/6/68/Google_logo_white_2015.png/revision/latest/scale-to-width-down/640?cb=20150901162827'}}
          />
          <View>
            <View style={styles.butonContainer}>
              <Button style={styles.button} light block onPress={this._googleSignIn}>
                <Text>Ingresa con Google</Text>
              </Button>
              <Button style={styles.button} light block>
                <Text>Ingresa con facebook</Text>
              </Button>
              <Button style={styles.button} block>
                <Text>Crea una cuenta con tu mail</Text>
              </Button>
            </View>
            <Text style={styles.textContainer}>¿Ya tienes una cuenta? <Text 
            onPress={() => this.go('Login')} style={styles.logIn}>Iniciar Sesion</Text>
            </Text>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10
  },
  textContainer: {
    color: '#fff',
    fontSize: 13,
    textAlign: 'center'
  },
  logIn: {
    color: blueFacebook,
    fontSize: 15
  },
  container: {
    marginTop: 50,
    flex: 1,
    paddingVertical: 30,
    marginHorizontal: 55,
    justifyContent: 'space-between'
  },
  butonContainer: {
    marginBottom: 50
  },
  logo: {
    width: null,
    height: 80,
    resizeMode: 'contain'
  }
})

export default connect()(BeforeLogin)
