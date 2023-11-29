import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Display Message', () => {
    test('renders received prop correctly', () => {
        render(<Message sharedProp="Test Value" />);

        const receivedPropElement = screen.getByText(/Test Value/i);
        expect(receivedPropElement).toBeInTheDocument();
    })
});