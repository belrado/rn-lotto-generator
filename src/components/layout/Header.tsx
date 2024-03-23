import { useCallback, useMemo } from 'react';
import { HeaderProps } from '@/types/common.ts';
import { useAppNavigate } from '@/hooks/common';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LangText } from '@/components/layout/LangText';
import { Colors, f } from '@/styles/common.ts';

export default function Header({ title, children }: HeaderProps) {
  const { goBack, checkCanGoBack, goToRootScreen } = useAppNavigate();

  const handleGoBack = useCallback(() => {
    if (checkCanGoBack()) {
      goBack();
    } else {
      goToRootScreen();
    }
  }, [checkCanGoBack, goBack, goToRootScreen]);

  return (
    <View style={styles.container}>
      {children ? (
        children
      ) : (
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <LangText style={f.b14lh24} color={Colors.white}>
            {title}
          </LangText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grape,
    height: 50,
    alignItems: 'center',
  },
  goBackButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
