import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LottoNumbersProps } from '@/types/common';
import { Ball } from '@/components';
import { LOTTO_BALL_COLORS } from '@/config/constants.ts';

export default function LottoNumbers({ numbers }: LottoNumbersProps) {
  return (
    <View style={styles.numbers}>
      {numbers.map((v, i) => {
        let checkBonus = false;
        checkBonus = i === numbers.length - 1;
        return <Ball key={i} color={LOTTO_BALL_COLORS[i]} number={v} bonus={checkBonus} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  numbers: {
    flexDirection: 'row',
  },
});
