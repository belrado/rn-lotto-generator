import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Platform } from 'react-native';
import { ChildrenProps, ContainerProps } from '@/types/common.ts';
import Header from '@/components/layout/Header';
import { APP_TITLE } from '@/config/constants.ts';

function ContainerInner({ children }: ChildrenProps) {
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}

export default function Container({ title, children, scroll = false }: ContainerProps) {
  const statusBarStyle = Platform.OS === 'ios' ? 'dark-content' : 'default';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} hidden={false} barStyle={statusBarStyle} />
      <Header title={title ? title : APP_TITLE} />
      {scroll ? (
        <ScrollView>
          <ContainerInner children={children} />
        </ScrollView>
      ) : (
        <ContainerInner children={children} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
