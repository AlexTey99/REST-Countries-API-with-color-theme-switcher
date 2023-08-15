import { Flag } from "../types/flag";
import { Link } from "react-router-dom";

const ItemFlag = ({ flag, handleClick}: IProps) => {

    const handleDivClick = (event) => {
        const informationFlagContainer = document.getElementById('informationFlagContainer');
        const selectedDivId = event.currentTarget.id;
        console.log("ID del div seleccionado: " + selectedDivId);

        // Coje el elemento por su id
        const selectDiv = document.getElementById(selectedDivId);
    
        // Clona el elemento y lo muestra en el div
        const productoClonado = selectDiv.cloneNode(true);
        informationFlagContainer.appendChild(productoClonado);
        
    }
    


    return(
        <Link to={`/detailContries/${flag.cca2}`} onClick={handleDivClick} id={flag.cca2} className="item-flag-container">
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
    handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  };

  
export{ItemFlag};
