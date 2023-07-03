import { TShirtSize } from '../../types/T-Shirt-size';

export enum ButtonMode {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  TYPOGRAPHY = 'typography',
}

export interface BasicButton {
  mode?: ButtonMode;
  size?: TShirtSize;
}
