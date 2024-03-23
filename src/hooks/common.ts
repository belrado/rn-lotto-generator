//import {AppDispatch, RootState} from "@_src/features/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../features/store';
import { useCallback } from 'react';
import { NavigationProps, RootStackParamList } from '@/types/navigation.ts';
import { useNavigation } from '@react-navigation/native';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAppNavigate() {
  const navigation = useNavigation<NavigationProps<any>>();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const checkCanGoBack = useCallback((): boolean => {
    return navigation.canGoBack();
  }, [navigation]);

  const goToRootScreen = useCallback(() => {
    navigation.navigate('Main');
  }, [navigation]);

  return { goBack, checkCanGoBack, goToRootScreen };
}

export function useShowDetail() {
  const navigation = useNavigation<NavigationProps<'Detail'>>();
  const goDetailScreen = useCallback((id: string) => {
    navigation.navigate('Detail', { id: id });
  }, []);

  return { goDetailScreen };
}
