import { TShirtSize } from '../../types/T-Shirt-size';

export enum ButtonMode {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  TYPOGRAPHY = 'typography',
}

export interface BasicButton {
  mode?: ButtonMode;
  size?: TShirtSize;
}
