interface MessageProp {
    sharedProp: string;
}

const Message: React.FC<MessageProp> = ({ sharedProp }) => {
    return (
        <>
            <p>{sharedProp}</p>
        </>
    )
};

export default Message;