import { useEffect, useState } from 'react';
import { Flag } from "../types/flag";
import {Button} from "../components/Button";
import { useParams } from 'react-router-dom';

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
                    <Button className="button dark"/>
                </div>
                <div id="informationFlagContainer" className="information-flag-container">
                    {country && (
                      <div className='contain-information-flag-container'>
                          <img className="image-inContainer" src={country.flags.png} alt="" />
                          <div className="information-flags-container-left-and-right">
                            <div className="left-and-right-container">
                                <div className="information-flags-left-container">
                                  <h2>{country.name.common}</h2>
                                  <br />
                                  <p>{"Native Name: " + country.name.official}</p>
                                  <p>{"Population: " + country.population}</p>
                                  <p>{"Region" + country.region}</p>
                                  <p>{"Sub Region: " + country.subregion}</p>
                                  <p>{"Capital: " + country.capital}</p>
                                </div>
                                <div className="information-flags-right-container">
                                  <p>{"Top Level Domain: " + country.flag}</p>
                                  <p>{"Currencie: " + country.currencies.SAR}</p>
                                  <p>{"Languages: " + country.currencies.SAR}</p>
                                </div>
                            </div>
                            <div className="bottom-container">
                                <p>{"Border Countries: " + country.languages}</p>
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
