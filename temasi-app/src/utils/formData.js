import { Platform } from 'react-native';

export const generateFormData = image => {
  const data = new FormData();
  data.append('photo', {
    uri:
      Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
    name: image.fileName,
    type: image.type,
  });

  return data;
};
