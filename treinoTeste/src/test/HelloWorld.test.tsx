import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../components/HelloWorld';

test('renders HelloWorld component', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(/Hello Lucas/i);
  expect(linkElement).toBeInTheDocument();
});
