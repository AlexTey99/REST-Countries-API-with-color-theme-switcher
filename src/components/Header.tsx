import { BsFillMoonFill } from 'react-icons/bs';


const Header = ({onClick, className}: IProps) => {

    return(
        <div className={className}>
            <p className="whereWorld">Where in the world?</p>
            
            <div className="icon-moon">
                <BsFillMoonFill onClick={onClick} id="Moon" className='fa-sharp'/>
                <p>Dark Mode</p>
            </div>
            
        </div>
    );
};

type IProps = {
    onClick?: () => void;
    className?: string
}

export{Header};