import React, { useCallback, useEffect, useState } from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation.ts';
import RootStack from '@/navigation/RootStack';
import mobileAds from 'react-native-google-mobile-ads';
import { getToken, setToken } from '@/asyncStorage/encrypted';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

function App(): false | React.JSX.Element {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();
  const [appStart, setAppStart] = useState<boolean>(false);

  const getTokenAsync = useCallback(async () => {
    const token = await getToken();
    if (token) {
      return token;
    } else {
      return await setToken({});
    }
  }, []);

  const setFcmPushToken = useCallback(async () => {
    const fcmToken: string = await messaging().getToken();
    console.log('fcmToken', fcmToken);
  }, []);

  useEffect(() => {
    setFcmPushToken().then();
    getTokenAsync()
      .then(token => {
        console.log('token', token);
      })
      .catch(e => console.log('error', e));
    setAppStart(true);
    mobileAds()
      .initialize()
      .then(adapterStatuses => {})
      .catch(e => console.log('error', e));
    return messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('remoteMessage', remoteMessage, remoteMessage?.notification?.body);
    });
  }, []);

  return (
    appStart && (
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    )
  );
}

export default App;
