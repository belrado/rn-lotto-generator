import { useCallback, useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { HomeTabScreenProps } from '@/types/navigation.ts';
import Admob from '@/components/Admob.tsx';
import { LottoNumbers } from '@/components';
import { Container, LangText } from '@/components/layout';
import { useShowDetail } from '@/hooks/common';

export default function Home({ navigation }: HomeTabScreenProps<'Home'>) {
  useEffect(() => {
    console.log('inHome');

    return () => console.log('outMain');
  }, []);
  const numbers = ['23', '12', '4', '5', '34', '41', '10'];

  const { goDetailScreen } = useShowDetail();
  const handleShowDetail = useCallback(() => {
    goDetailScreen('1234');
  }, []);

  return (
    <Container>
      <Text>Home Screen</Text>
      <Pressable onPress={handleShowDetail}>
        <LottoNumbers numbers={numbers} />
      </Pressable>
      <LangText>1등 당첨금 1,838388,99원</LangText>
    </Container>
  );
}
