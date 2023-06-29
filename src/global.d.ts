declare module '*.svg' {
  import { ComponentType } from 'react';
  import { PathProps, SvgProps } from 'react-native-svg';

  const svg: ComponentType<SvgProps> & { Path: FC<PathProps> };

  export default svg;
}

declare module '*.png';
