import HomeScreen from '../view/Main/HomeScreen';
import SplashScreen from '../view/Splash/SplashScreen';

export default {
  defaultRouteName: 'SplashScreen',
  screenOptions: {
    headerShown: false,
  },
  routes: [
    {name: 'SplashScreen', screen: SplashScreen},
    {name: 'HomeScreen', screen: HomeScreen},
  ],
};
