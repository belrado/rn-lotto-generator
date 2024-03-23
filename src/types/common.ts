import React from 'react';
import { StyleProp, TextProps } from 'react-native';

export interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export interface ChildrenProps {
  children: React.ReactNode;
  style?: any;
  bottom?: boolean;
}

export interface ContainerProps extends ChildrenProps {
  title?: string;
  scroll?: boolean;
}

export interface LangTextProps extends TextProps {
  style?: StyleProp<any>;
  color?: string;
  size?: number;
  children: React.ReactNode | string;
  textAlign?: string;
  letterSpacing?: number;
}

export type LottoNumbersSize = {
  0: string;
  1: string;
  2: string;
};

export interface LottoNumbersProps {
  numbers: Array<string>;
}
export interface BallProps {
  color: string;
  number: string | number;
  bonus: boolean;
}

export interface TokenRequiredProps {
  jwt: string;
  jwtExpire: string;
  refresh: string;
  push: string;
}
export interface TokenProps {
  jwt?: string;
  jwtExpire?: string;
  refresh?: string;
  push?: string;
}
