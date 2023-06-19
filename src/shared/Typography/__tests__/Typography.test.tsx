import { render } from '@testing-library/react-native';
import React from 'react';

import { COLORS } from '../../../constants/colors';
import { TextSize } from '../types';
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

  it('should render text as H1', () => {
    const { getByTestId } = render(
      <Typography bold textSize={TextSize.XL} {...textProps}>
        Text for test
      </Typography>,
    );

    const { props } = getByTestId('textWrapper');

    expect(props.style).toContainEqual({ fontSize: 50 });
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
});
