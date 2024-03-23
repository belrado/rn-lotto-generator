import EncryptedStorage from 'react-native-encrypted-storage';
import { TokenProps } from '@/types/common.ts';

export async function setToken({ jwt, refresh, push }: TokenProps) {
  try {
    await EncryptedStorage.setItem(
      'userToken',
      JSON.stringify({
        jwt: jwt ? jwt : 'jwtToken',
        refresh: refresh ? refresh : 'refreshToken',
        push: push ? push : 'pushToken',
      }),
    );

    return await getToken();
    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}

export async function getToken() {
  try {
    const token = await EncryptedStorage.getItem('userToken');
    console.log('getToken', token);
    if (token !== undefined) {
      return token;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
