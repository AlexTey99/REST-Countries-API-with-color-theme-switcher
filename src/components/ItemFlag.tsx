import { Flag } from "../types/flag";

const ItemFlag = ({ flag}: IProps) => {
    return(
        <div className="item-flag-container">
            <img className="image-flag" src={flag.flags.png} alt="" />
            <div className="flag-name">{flag.name.common}</div>
        </div>
    );
};

type IProps = {
    flag: Flag;
  };

export{ItemFlag};