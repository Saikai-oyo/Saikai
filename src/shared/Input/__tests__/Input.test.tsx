import { render } from '@testing-library/react-native';
import React from 'react';

import { COLORS } from '../../../constants/colors';
import { Input, InputProps } from '../Input';

const inputProps: InputProps = {
  testID: 'inputWrapper',
  labelTestID: 'labelWrapper',
};

describe('Input', () => {
  it('should render input with label', () => {
    const { getByText } = render(<Input label="Im label" {...inputProps} />);

    expect(getByText('Im label')).toBeDefined();
  });

  it('should render input with placeholder', () => {
    const { getByTestId } = render(<Input placeholder="placeholder here!" {...inputProps} />);

    const { props } = getByTestId('inputWrapper');

    expect(props.placeholder).toBe('placeholder here!');
  });

  it('should render text component with costume style', () => {
    const additionalProps = {
      style: {
        color: COLORS.white,
      },
    };

    const { getByTestId } = render(<Input {...additionalProps} {...inputProps} />);

    const { props } = getByTestId('inputWrapper');

    expect(props.style).toContainEqual(additionalProps.style);
  });
});
