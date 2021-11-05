import { ToastAndroid, Platform, AlertIOS } from 'react-native';

export const toastError = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.LONG);
  } else {
    AlertIOS.alert(message);
  }
};
