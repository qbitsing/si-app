import { AppRegistry, YellowBox } from 'react-native'
import App from './App'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Method `jumpToIndex` is deprecated'])

AppRegistry.registerComponent('siApp', () => App)
