interface InputProps {
    sharedProp: string;
    onPropChange: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({ sharedProp, onPropChange }) => {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onPropChange(newValue);
    }

    return (
        <>
            <label htmlFor="msg"></label>
            <input
                id="msg"
                type="text"
                placeholder="Escreva sua mensagem"
                value={sharedProp}
                onChange={handleInput}
            />
        </>
    )
};

export default Input;