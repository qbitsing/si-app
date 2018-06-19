import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native'
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';

import {blueFacebook} from './../colors'

class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTintColor: 'white',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  }
  render() {
    const logo = 'https://www.iteffect.dk/wp-content/uploads/2018/01/skype-logo.png'
    return (
      <Container>
        <Form style={styles.container}>
          <Image
          style={{width: null, height: 100, resizeMode: 'contain'}} 
          source={{
            uri: logo
          }}/>
          <FormItem floatingLabel last>
            <Label style={{color: '#eee'}}>Email</Label>
            <Input  style={{color: '#eee'}} selectionColor="#eee"/>
          </FormItem>
          <FormItem floatingLabel last>
            <Label style={{color: '#eee'}}>Password</Label>
            <Input style={{color: '#eee'}} selectionColor="#eee" secureTextEntry={true} />
          </FormItem>

          <Button style={styles.button} rounded full light>
            <Text> Login </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: blueFacebook,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  button: {
    marginTop: 25
  }
})

export default LoginScreen