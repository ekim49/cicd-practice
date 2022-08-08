import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
// import React from 'react';
import App from './App';

test('renders my agora states', () => {
  render(<App />);
  const linkElement = screen.getByText(/my agora states/i);
  expect(linkElement).toBeInTheDocument();
});