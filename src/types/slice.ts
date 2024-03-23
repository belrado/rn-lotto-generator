export interface CommonInitialState {
  loading: boolean;
}
export interface AuthInitialState {
  deviceId: string;
  jwtToken: string;
  jwtTokenExpire: string;
  refreshToken: string;
  pushToken: string;
}
