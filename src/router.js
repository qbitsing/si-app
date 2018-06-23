import HomeTab from './components/tabs/Home'
import ProfileTab from './components/tabs/Profile'
import SalerTab from './components/tabs/Saler'
import CategoriesTab from './components/tabs/Categories'
import Login from './components/stack/loginScreen'
import SaleDetail from './components/SaleDetail'
import BeforeLogin from './components/stack/beforeLogin'
import newSale from './components/tabs/addSale'

const router = {
  Home: HomeTab,
  Profile: ProfileTab,
  Categories: CategoriesTab,
  Saler: SalerTab,
  BeforeLogin,
  Login,
  SaleDetail,
  newSale
}
const config = {
  navigationOptions: { 
    headerMode: 'screen' 
  }
}

export {
  router,
  config
}
