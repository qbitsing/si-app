import HomeTab from './screens/tabs/Home'
import ProfileTab from './screens/tabs/Profile'
import SalerTab from './screens/tabs/Saler'
import CategoriesTab from './screens/tabs/Categories'
import Login from './screens/stack/loginScreen'
import SaleDetail from './screens/SaleDetail'
import BeforeLogin from './screens/stack/beforeLogin'
import newSale from './screens/tabs/addSale'
import Steeper from './screens/stack/addSaleSteeper'

import {createStackNavigator} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const TabsNavigator = createMaterialBottomTabNavigator(
{
  Home: HomeTab,
  Categories: CategoriesTab,
  newSale,
  Saler: SalerTab,
  Profile: ProfileTab
},
{
  initialRouteName: 'Home',
  activeTintColor: '#2c3e50',
  inactiveTintColor: '#bdc3c7',
  barStyle: { backgroundColor: '#ecf0f1' },
}
)

const StackNavigator = createStackNavigator({
  TabsNavigator,
  Steeper,
  BeforeLogin,
  Login,
  SaleDetail,
},
{
  navigationOptions: { 
    headerMode: 'screen' 
  }
})

export default StackNavigator
