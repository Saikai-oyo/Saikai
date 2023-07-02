import { render } from '@testing-library/react-native';
import React from 'react';

import { COLORS } from '../../../constants/colors';
import { TShirtSize } from '../../types/T-Shirt-size';
import { Typography, TypographyProps } from '../Typography';

const textProps: TypographyProps = {
  testID: 'textWrapper',
};

describe('Typography', () => {
  it('should render text with bold', () => {
    const { getByTestId } = render(
      <Typography bold {...textProps}>
        Text for test
      </Typography>,
    );

    const { props } = getByTestId('textWrapper');

    expect(props.style).toContainEqual({ fontWeight: 'bold' });
  });

  it('should render disabled text', () => {
    const { getByTestId } = render(
      <Typography bold disabled {...textProps}>
        Text for test
      </Typography>,
    );

    const { props } = getByTestId('textWrapper');

    expect(props.disabled).toBeTruthy();
  });

  it('should render text component with costume style', () => {
    const additionalProps = {
      style: {
        color: COLORS.white,
      },
    };

    const { getByTestId } = render(
      <Typography bold disabled {...additionalProps} {...textProps}>
        Text for test
      </Typography>,
    );

    const { props } = getByTestId('textWrapper');

    expect(props.style).toContainEqual(additionalProps.style);
  });
  describe('Render typography by size', () => {
    it('should render text as XS', () => {
      const { getByTestId } = render(
        <Typography bold textSize={TShirtSize.XS} {...textProps}>
          Text for test
        </Typography>,
      );

      const { props } = getByTestId('textWrapper');

      expect(props.style).toContainEqual({ fontSize: 12, lineHeight: 20 });
    });

    it('should render text as S', () => {
      const { getByTestId } = render(
        <Typography bold textSize={TShirtSize.S} {...textProps}>
          Text for test
        </Typography>,
      );

      const { props } = getByTestId('textWrapper');

      expect(props.style).toContainEqual({ fontSize: 14, lineHeight: 20 });
    });

    it('should render text as M', () => {
      const { getByTestId } = render(
        <Typography bold textSize={TShirtSize.M} {...textProps}>
          Text for test
        </Typography>,
      );

      const { props } = getByTestId('textWrapper');

      expect(props.style).toContainEqual({ fontSize: 16, lineHeight: 24 });
    });

    it('should render text as L', () => {
      const { getByTestId } = render(
        <Typography bold textSize={TShirtSize.L} {...textProps}>
          Text for test
        </Typography>,
      );

      const { props } = getByTestId('textWrapper');

      expect(props.style).toContainEqual({ fontSize: 18, lineHeight: 28 });
    });

    it('should render text as XL', () => {
      const { getByTestId } = render(
        <Typography bold textSize={TShirtSize.XL} {...textProps}>
          Text for test
        </Typography>,
      );

      const { props } = getByTestId('textWrapper');

      expect(props.style).toContainEqual({ fontSize: 20, lineHeight: 30 });
    });
  });
});
