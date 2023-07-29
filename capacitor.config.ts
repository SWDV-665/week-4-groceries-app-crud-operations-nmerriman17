import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.GroceryApp',
  appName: 'GroceryApp',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
