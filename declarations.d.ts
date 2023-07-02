declare module '*.svg' {
  import { ComponentType } from 'react';
  import { SvgProps } from 'react-native-svg';
  declare const svg: ComponentType<SvgProps>;

  export default svg;
}
