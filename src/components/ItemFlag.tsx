import { Flag } from "../types/flag";
import { Link } from "react-router-dom";

const ItemFlag = ({ flag }: IProps) => {
    return(
        <Link to={`/detailContries/${flag.cca2}`} className="item-flag-container">
            <img className="image-flag" src={flag.flags.png} alt="" />
            <div className="flag-dates-container">
                <p className="name">{flag.name.common}</p>
                <span>Population: <p className="date-text">{flag.population}</p></span>
                <span>Region: <p className="date-text">{flag.region}</p></span>
                <span>Capital: <p className="date-text">{flag.capital}</p></span>
                </div>
        </Link>
    );
};

type IProps = {
    flag: Flag;
  };

export{ItemFlag};