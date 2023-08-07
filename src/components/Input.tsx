
const Input = ({className, placeholder}: IProps) => {
    return(
        <input className={className} type="text" placeholder={placeholder}/>
    );
};

type IProps = {
    className?: string;
    placeholder?: string;
}

export{Input};