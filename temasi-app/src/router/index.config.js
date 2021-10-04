import BuatPermohonan from '../views/BuatPermohonan';
import LandingScreen from '../views/Landing';
import HomeScreen from '../views/Main';
import SplashScreen from '../views/Splash';
import DetailPermohonan from '../views/DetailPermohonan';
import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';

export default {
  defaultRouteName: 'RegisterScreen',
  screenOptions: {
    headerShown: false,
  },
  routes: [
    { name: 'SplashScreen', screen: SplashScreen },
    { name: 'HomeScreen', screen: HomeScreen },
    { name: 'LandingScreen', screen: LandingScreen },
    { name: 'BuatPermohonanScreen', screen: BuatPermohonan },
    { name: 'DetailPermohonan', screen: DetailPermohonan },
    { name: 'LoginScreen', screen: LoginScreen },
    { name: 'RegisterScreen', screen: RegisterScreen },
  ],
};
