
const Button = ({className, id}: IProps) => {
    return(
        <button className={className} id={id}>Back</button>
    );
};

type IProps = {
    className?: string;
    id?: string;
}

export{Button};

