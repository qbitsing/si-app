import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import {Container, Content, Header, Icon} from 'native-base'
import {PoppinsSemiBold} from '../../../utils/Fonts'
import {gray} from '../../../colors'
class EditProfile extends Component {
  render() {
    return (
      <Container>
        <View style={styles.header}>
          <Icon style={styles.headerIcon} type="FontAwesome" name="chevron-left" />
          <Text style={styles.headerTitle}>Editar Perfil</Text>
        </View>
        <Content>
          <TextInput style={styles.basicInput} />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  basicInput: {

  },
  headerTitle: {
    color: gray,
    fontFamily: PoppinsSemiBold,
    fontSize: 27,
  },
  headerIcon: {
    color: gray,
    marginRight: 20
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  }
})
export default EditProfile
