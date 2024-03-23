export interface CommonInitialState {
  loading: boolean,
}
export interface AuthInitialState {
  jwtToken: string,
  jwtTokenExpire: string,
  refreshToken: string,
  pushToken: string,
}
