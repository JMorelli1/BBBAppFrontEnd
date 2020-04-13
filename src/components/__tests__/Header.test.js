import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.js';

test('renders react header', () => {
  const { getByText } = render(<Header />);
});


