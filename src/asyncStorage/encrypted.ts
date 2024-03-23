import EncryptedStorage from 'react-native-encrypted-storage';
import { TokenProps, TokenRequiredProps } from '@/types/common.ts';
import { appAxios } from '@/libs/axiosInstance.ts';

export async function setToken(userToken: TokenRequiredProps): Promise<TokenRequiredProps | null> {
  try {
    await EncryptedStorage.setItem('userToken', JSON.stringify(userToken));
    return await getToken();
  } catch {
    return null;
  }
}
export async function updatePushToken(pushToken: string) {
  try {
    const savedToken: TokenRequiredProps | null = await getToken();
    if (savedToken) {
      savedToken.push = pushToken;
      await EncryptedStorage.setItem('userToken', JSON.stringify(savedToken));
      return savedToken;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

export async function getToken(): Promise<TokenRequiredProps | null> {
  try {
    const userToken = await EncryptedStorage.getItem('userToken');
    if (userToken !== null && userToken !== undefined) {
      const objUserToken: TokenRequiredProps = JSON.parse(userToken);
      // 토큰 갱신
      const nowTime = Math.floor(new Date().getTime() / 1000);
      if (nowTime + 60 * 10 > parseInt(objUserToken.jwtExpire)) {
        try {
          const userToken = await appAxios<TokenRequiredProps>('', 'post');
          return setToken(userToken.data.result);
        } catch (e) {
          return objUserToken;
        }
      } else {
        return objUserToken;
      }
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
