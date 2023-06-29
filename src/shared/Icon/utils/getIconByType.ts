import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';

import FacebookIcon from '../../../assets/icons/facebook.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import GoogleIcon from '../../../assets/icons/google.svg';
import LinkedinIcon from '../../../assets/icons/linkedIn.svg';
import { IconTypes } from '../types';

export const getIconByType = (type: IconTypes): ComponentType<SvgProps> | null => {
  switch (type) {
    case 'facebook':
      return FacebookIcon;
    case 'github':
      return GithubIcon;
    case 'google':
      return GoogleIcon;
    case 'linkedin':
      return LinkedinIcon;
    default:
      return null;
  }
};
