import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ByeWorld from '../components/ByeWorld';

test('renders ByeWorld component', () => {
  render(<ByeWorld />);
  const linkElement = screen.getByText(/Bye World/i);
  expect(linkElement).toBeInTheDocument();
});