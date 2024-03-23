import { RootStackScreenProps } from '@/types/navigation.ts';
import { Container, LangText } from '@/components/layout';
import { useEffect } from 'react';

function Detail({ route, navigation }: RootStackScreenProps<'Detail'>) {
  const { id } = route.params;
  useEffect(() => {
    console.log('id', id);
  }, []);

  return (
    <Container title={id + ' 회 당첨 결과'}>
      <LangText>haha</LangText>
    </Container>
  );
}

export default Detail;
