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

class LoginScreen extends Component {
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
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>

          <Button style={styles.button} full primary>
            <Text> Login </Text>
          </Button>
          <Button style={styles.button} full primary>
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  button: {
    marginTop: 10
  }
})

export default LoginScreen