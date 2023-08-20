
const Button = ({className, id, buttonText, onClick}: IProps) => {
    return(
        <button className={className} id={id} onClick={onClick}>{buttonText}</button>
    );
};

type IProps = {
    className?: string;
    id?: string;
    buttonText?: string;
    onClick?: () => void;
}

export{Button};

