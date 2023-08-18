
const Header = ({onClick}: IProps) => {

    return(
        <div className="header dark">
            <p className="whereWorld">Where in the world</p>
            
            <div className="icon-moon">
                <i onClick={onClick} className="fa-sharp fa-regular fa-moon"></i>
                <p>Dark Mode</p>
            </div>
            
        </div>
    );
};

type IProps = {
    onClick?: () => void;
}

export{Header};