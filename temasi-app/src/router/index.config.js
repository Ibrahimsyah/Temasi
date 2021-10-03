import BuatPermohonan from '../views/BuatPermohonan';
import LandingScreen from '../views/Landing';
import HomeScreen from '../views/Main';
import SplashScreen from '../views/Splash';

export default {
  defaultRouteName: 'SplashScreen',
  screenOptions: {
    headerShown: false,
  },
  routes: [
    {name: 'SplashScreen', screen: SplashScreen},
    {name: 'HomeScreen', screen: HomeScreen},
    {name: 'LandingScreen', screen: LandingScreen},
    {name: 'BuatPermohonanScreen', screen: BuatPermohonan},
  ],
};
