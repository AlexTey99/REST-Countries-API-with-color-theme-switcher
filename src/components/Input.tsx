
const Input = ({className, placeholder, id, handleInputChange, value}: IProps) => {
    return(
        <input id={id}  className={className} onChange={handleInputChange}  value={value} type="text" placeholder={placeholder}/>
    );
};

type IProps = {
    className?: string;
    placeholder?: string;
    id?: string;
    value?: string;
    handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export{Input};