import { HomeTabScreenProps } from '@/types/navigation.ts';
import { Text, View } from 'react-native';

export default function Numbers({ navigation }: HomeTabScreenProps<'Numbers'>) {
  return (
    <View>
      <Text>Numbers Screen</Text>
    </View>
  );
}
