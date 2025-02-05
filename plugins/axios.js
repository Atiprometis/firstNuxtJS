import axios from 'axios';

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: 'https://dummyjson.com/products' // ตั้งค่า Base URL
  });

  return {
    provide: {
      axios: api
    }
  };
});