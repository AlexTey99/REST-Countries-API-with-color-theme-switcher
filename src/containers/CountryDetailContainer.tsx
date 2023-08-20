import { useEffect, useState } from 'react';
import { Flag } from "../types/flag";
import {Button} from "../components/Button";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const CountryDetailContainer = () =>{
    const {code} = useParams();
    const [country, setCountry] = useState<Flag>(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          .then(response => response.json())
          .then(data => {
            setCountry(data[0]);
          })
          .catch(error => {
            console.log(error);
          });
    }, [code]);



    return(
        <div className="layout-major-container">
            <div className="layot-main-container">
                <div className="button-container">
                    <i className="fa-sharp fa-solid fa-arrow-left"></i>
                    <Link className='button' to={'/'}>Back</Link>   
                  </div>
                <div id="informationFlagContainer" className="information-flag-container">
                    {country && (
                      <div className='contain-information-flag-container'>
                          <img className="image-inContainer" src={country.flags.png} alt="" />
                          <div className="information-flags-container-left-and-right">
                          <span><h2 className='Tittle'>{country.name.common}</h2></span>
                            <div className="left-and-right-container">                   
                                <div className="information-flags-left-container"> 
                                  <br />
                                  <span>Native Name: <p>{country.name.official}</p></span>
                                  <span>Population: <p>{country.population}</p></span>
                                  <span>Region <p>{country.region}</p></span>
                                  <span>Sub Region: <p>{country.subregion}</p></span>
                                  <span>Capital: <p>{country.capital}</p></span>
                                </div>
                                <div className="information-flags-right-container">
                                  <span>Top Level Domain: <p>{country.flag}</p></span>
                                  <span>Currencie: <p>{+country.currencies}</p></span>
                                  <span>Languages: <p>{+country.currencies}</p></span>
                                </div>
                            </div>
                            <div className="bottom-container">
                                <span>Border Countries: <p>{+country.languages}</p></span>
                            </div>
                            
                          </div>
                      </div>
                    )}
                </div>   
            </div>      
        </div>
       
    );
};


export{CountryDetailContainer};
