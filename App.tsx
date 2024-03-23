import React, { useCallback, useEffect, useState } from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation.ts';
import RootStack from '@/navigation/RootStack';
import mobileAds from 'react-native-google-mobile-ads';
import { getToken } from '@/asyncStorage/encrypted';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { useAppDispatch } from '@/hooks/common.ts';
import { appAxios } from '@/libs/axiosInstance.ts';
import { APIResponse } from '@/types/axios.ts';
import DeviceInfo from 'react-native-device-info';

function App(): false | React.JSX.Element {
  const navigationRef = createNavigationContainerRef<RootStackParamList>();
  const [appStart, setAppStart] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getTokenAsync = useCallback(async () => {
    const fcmToken: string = await messaging().getToken();
    const token = await getToken();
    if (token && token.push === fcmToken) {
      return token;
    } else {
      // 토큰 정보가 없다면 서버로 fcm 토큰과 deviceId 를 보내 저장 시킨뒤 notification 으로 토큰을 전송 받아 저장 시킨다.
      const sendData = {
        deviceId: await DeviceInfo.getUniqueId(),
        fcmToken: fcmToken,
      };
      try {
        const response = await appAxios<void>('/api/lotto/1112', 'get', sendData);
        console.log('response', response.data);
      } catch (e) {
        console.log('response errororor', e);
      }
    }
  }, []);

  /*
  오늘이 토요일 이며 9시가 넘었다면 마지막 로또회차날짜와 오늘 날짜 비교해 다르다면 데이터 가져오게 작업 또는
  push 가오면 자동으로 데이터를 받아오게 작업 한다 데이터를 받아오게 할때는 연결 안된 차수를 검색햇서 가져온다.
   */
  useEffect(() => {}, []);

  useEffect(() => {
    getTokenAsync()
      .then(token => {
        if (token) {
          console.log('token', token, typeof token);
        }
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
