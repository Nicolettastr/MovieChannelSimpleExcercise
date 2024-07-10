const Button = ({ name, handleAction, className }) => {
    return (
        <button className={`${className} generalButton`} onClick={handleAction}>
            {name}
        </button>
    );
};

export default Button;
