import { Flag } from "../types/flag";

const ItemFlag = ({ flag}: IProps) => {
    return(
        <div className="item-flag-container">
            <img className="image-flag" src={flag.flags.png} alt="" />
            <div className="flag-dates-container">
                <p className="name">{flag.name.common}</p>
                <span>Population: <p className="date-text">{flag.population}</p></span>
                <span>Region: <p className="date-text">{flag.region}</p></span>
                <span>Capital: <p className="date-text">{flag.capital}</p></span>
                </div>
        </div>
    );
};

type IProps = {
    flag: Flag;
  };

export{ItemFlag};