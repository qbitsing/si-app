import HomeTab from './components/tabs/Home'
import ProfileTab from './components/tabs/Profile'
import SalerTab from './components/tabs/Saler'
import CategoriesTab from './components/tabs/Categories'
import Login from './components/stack/loginScreen'
import SaleDetail from './components/SaleDetail'

const router = {
  Home: HomeTab,
  Profile: ProfileTab,
  Categories: CategoriesTab,
  Saler: SalerTab,
  Login,
  SaleDetail
}
const config = {
  navigationOptions: {
    title: 'AppName'
  }
}

export {
  router,
  config
}
