import axios from 'axios';
import {Platform} from 'react-native';
import {devPort, prodUrl} from './api-urls';

const localUrl =
  Platform.OS === 'android'
    ? `http://10.0.2.2:${devPort}`
    : `http://localhost:${devPort}`;

export const apiUrl = localUrl;

export const isGateway = false;

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
