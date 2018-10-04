import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation'
import MyInfo from './MyInfo'
import MySales from './MySales'

const routeConfig = {
    MyInfo: {
        screen: MyInfo,
        navigationOptions: {
            title: 'Información'
        }
    },
    MySales: {
        screen: MySales,
        navigationOptions: {
            title: 'Mis subastas'
        }
    }
}

const navigationOptions = {

}

const Navigator = createMaterialTopTabNavigator(routeConfig, navigationOptions)

export default Navigator