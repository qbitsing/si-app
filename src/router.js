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

const StackNavigator = createStackNavigator({
  Home: HomeTab,
  Profile: ProfileTab,
  Categories: CategoriesTab,
  Saler: SalerTab,
  BeforeLogin,
  Login,
  SaleDetail,
  newSale
},
{
  navigationOptions: { 
    headerMode: 'screen' 
  }
})
export default StackNavigator
