import HomeTab from './screens/tabs/Home'
import ProfileTab from './screens/tabs/Profile'
import SalerTab from './screens/tabs/Saler'
import CategoriesTab from './screens/tabs/Categories'
import Login from './screens/stack/loginScreen'
import SaleDetail from './screens/SaleDetail'
import BeforeLogin from './screens/stack/beforeLogin'
import newSale from './screens/tabs/addSale'

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const TabsNavigator = createMaterialBottomTabNavigator(
{
  Home: {
    key: 'ht',
    screen: HomeTab
  },
  Categories: {
    key: 'ct',
    screen: CategoriesTab
  },
  newSale,
  Saler: SalerTab,
  Profile: {
    key: 'pt',
    screen: ProfileTab
  }
},
{
  initialRouteName: 'Home',
  // labeled: false,
  activeTintColor: '#3498db',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#eee' },
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
