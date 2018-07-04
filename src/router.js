import HomeTab from './screens/tabs/Home'
import ProfileTab from './screens/tabs/Profile'
import SalerTab from './screens/tabs/Saler'
import CategoriesTab from './screens/tabs/Categories'
import Login from './screens/stack/loginScreen'
import SaleDetail from './screens/SaleDetail'
import BeforeLogin from './screens/stack/beforeLogin'
import newSale from './screens/tabs/addSale'

import {
  createStackNavigator
} from 'react-navigation'
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
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
}
)

const StackNavigator = createStackNavigator({
  TabsNavigator,
  BeforeLogin,
  Login,
  SaleDetail
},
{
  navigationOptions: { 
    headerMode: 'screen' 
  }
})
export default StackNavigator
