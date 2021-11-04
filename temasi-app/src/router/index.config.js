import BuatPermohonan from '../views/BuatPermohonan';
import LandingScreen from '../views/Landing';
import HomeScreen from '../views/Main';
import SplashScreen from '../views/Splash';
import DetailPermohonan from '../views/DetailPermohonan';
import LoginScreen from '../views/Login';
import RegisterScreen from '../views/Register';
import PenyaluranDonasiScreen from '../views/PenyaluranDonasi';
import DetailPenyaluran from '../views/DetailPenyaluran';

export default {
  defaultRouteName: 'SplashScreen',
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
    { name: 'PenyaluranDonasi', screen: PenyaluranDonasiScreen },
    { name: 'DetailPenyaluran', screen: DetailPenyaluran },
  ],
};
