import { AppConfig } from '../config/app';

export const absoluteUrl = path => {
  const result = `${AppConfig.BASE_URL}${path}`;
  console.log(result);
  return result;
};
