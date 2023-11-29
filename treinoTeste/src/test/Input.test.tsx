import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Componente Input', () =>{
    test('renders Input component', () => {
        const mockOnPropChange = jest.fn();
        
        render(<Input sharedProp="" onPropChange={mockOnPropChange}/>)
        
        const inputElement = screen.getByPlaceholderText(/Escreva sua mensagem/i);
        
        fireEvent.change(inputElement, {target: { value: 'Hello, Testing!'}});
        
        expect(mockOnPropChange).toHaveBeenCalledWith('Hello, Testing!');
    });
});