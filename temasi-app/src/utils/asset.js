import { AppConfig } from '../config/app';

export const absoluteUrl = path => `${AppConfig.BASE_URL}${path}`;
