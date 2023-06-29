import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Button, ButtonProps } from '../Button';

const buttonProps: ButtonProps = {
  testID: 'ButtonWrapper',
  onPress: jest.fn(),
  text: 'Press me',
};

describe('Button', () => {
  it('should render Button with text inside', () => {
    const { getByText } = render(<Button {...buttonProps} />);

    expect(getByText('Press me')).toBeDefined();
  });

  it('should trigger Button onPress', () => {
    const eventData = {
      dummy: 'data',
    };

    const { getByText } = render(<Button {...buttonProps} />);

    fireEvent.press(getByText('Press me'), eventData);
    expect(buttonProps.onPress).toHaveBeenCalledWith(eventData);
  });
});
