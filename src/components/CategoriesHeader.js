import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {Icon} from 'native-base'

class CategoriesHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon type='FontAwesome' name='mobile-phone' style={styles.Icon} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 4,
    paddingLeft: 5,
    paddingRight: 5
  },
  categoriesContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 3,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:'#bdc3c7',
    borderRadius:100
  },
  Icon: {
    fontSize: 50,
    color: '#7f8c8d'
  }
})
export default CategoriesHeader
