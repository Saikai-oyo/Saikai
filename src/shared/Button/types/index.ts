import { TShirtSize } from '../../types/T-Shirt-size';

export enum ButtonMode {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
}

export interface BasicButton {
  mode?: ButtonMode;
  size?: TShirtSize;
}
