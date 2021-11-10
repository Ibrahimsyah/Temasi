import { ToastAndroid, Platform, AlertIOS } from 'react-native';

export const showToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    AlertIOS.alert(message);
  }
};
