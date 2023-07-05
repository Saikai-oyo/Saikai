import { StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  weight100: {
    fontWeight: '100',
  },
  weight200: {
    fontWeight: '200',
  },
  weight300: {
    fontWeight: '300',
  },
  weight400: {
    fontWeight: '400',
  },
  weight500: {
    fontWeight: '500',
  },
  weight600: {
    fontWeight: '600',
  },
  weight700: {
    fontWeight: '700',
  },
  weight800: {
    fontWeight: '800',
  },
  weight900: {
    fontWeight: '900',
  },
  bold: {
    fontWeight: 'bold',
  },
  normal: {
    fontWeight: 'normal',
  },
});

export const textWeightToFontWeight = (weight: TextStyle['fontWeight'], bold = false) => {
  if (bold || weight === 'bold') {
    return styles.bold;
  }

  switch (weight) {
    case '100':
      return styles.weight100;
    case '200':
      return styles.weight200;
    case '300':
      return styles.weight300;
    case '400':
      return styles.weight400;
    case '600':
      return styles.weight600;
    case '700':
      return styles.weight700;
    case '800':
      return styles.weight800;
    case '900':
      return styles.weight900;
    case 'normal':
      return styles.normal;
    case '500':
    default:
      return styles.weight500;
  }
};
