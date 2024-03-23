import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from '@/features/store';
import messaging from '@react-native-firebase/messaging';
import { setToken } from '@/asyncStorage/encrypted';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('background', remoteMessage, remoteMessage.notification.body);
});

const AppRoot = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRoot);
