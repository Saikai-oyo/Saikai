import { FunctionComponent, PropsWithChildren } from 'react';

declare global {
  type FunctionComponentWithChildren = FunctionComponent<PropsWithChildren>;
}
