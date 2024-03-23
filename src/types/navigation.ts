import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type NavigateProps = 'Main' | 'Home' | 'Numbers';

export type RootStackParamList = {
  /*Main: NavigatorScreenParams<HomeTabParamList>;*/
  Main: undefined;
  Detail: { id: string };
};

export type HomeTabParamList = {
  Home: undefined;
  Numbers: undefined;
  Statistics: undefined;
  Store: undefined;
  Setting: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type NavigationProps<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
