import { StyleSheet } from '../../utils/StyleSheet';

const styles = StyleSheet.create({
  container: {
    background: 'radial-gradient(70% 70% at 50% 50%, #062950 -10%, #4BA8FD 187%)',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
});

export const ColoredBackground: FunctionComponentWithChildren = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};
