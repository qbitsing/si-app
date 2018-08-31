import React, {Component} from 'react'
import {
  createStackNavigator
} from 'react-navigation'
import {Icon} from 'native-base'
import {Animated, Easing} from 'react-native'
import CategorieSelect from './selectCategory'
import SubCategorieSelect from './selectSubcategory'
import LeftData from './leftData'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

const SteeperNavigator = createStackNavigator(
{
  CategorieSelect,
  LeftData,
  SubCategorieSelect
},
{
  transitionConfig,
  navigationOptions: {
    header: null,
    tabBarVisible: false
  }
})

class Steeper extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      tabBarOnPress: () => {
        const sesion = navigation.getParam('sesion')
        if (sesion) {
          navigation.navigate('Profile')
        } else {
          navigation.navigate('newSale')
        }
      },
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="add" style={{color: tintColor}}/>
      }
    }
  }
  render() {
    return <SteeperNavigator/>
  }
}

export default Steeper
