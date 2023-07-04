import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

import BackIcon from '../../../assets/icons/back.svg';
import EyeCloseIcon from '../../../assets/icons/eye-close.svg';
import EyeOpenIcon from '../../../assets/icons/eye-open.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import GoogleIcon from '../../../assets/icons/google.svg';
import LinkedinIcon from '../../../assets/icons/linkedIn.svg';
import LockIcon from '../../../assets/icons/lock.svg';
import MailIcon from '../../../assets/icons/mail.svg';
import { IconTypes } from '../types';

export const getIconByType = (type: IconTypes): ComponentType<SvgProps> | null => {
  switch (type) {
    case 'facebook':
      return FacebookIcon;
    case 'mail':
      return MailIcon;
    case 'google':
      return GoogleIcon;
    case 'linkedin':
      return LinkedinIcon;
    case 'eye-open':
      return EyeOpenIcon;
    case 'eye-close':
      return EyeCloseIcon;
    case 'lock':
      return LockIcon;
    case 'back':
      return BackIcon;
    default:
      return null;
  }
};
