import LandingScreen from '../view/Landing';
import HomeScreen from '../view/Main/MainScreen';
import SplashScreen from '../view/Splash/SplashScreen';

export default {
  defaultRouteName: 'SplashScreen',
  screenOptions: {
    headerShown: false,
  },
  routes: [
    {name: 'SplashScreen', screen: SplashScreen},
    {name: 'HomeScreen', screen: HomeScreen},
    {name: 'LandingScreen', screen: LandingScreen}
  ],
};
