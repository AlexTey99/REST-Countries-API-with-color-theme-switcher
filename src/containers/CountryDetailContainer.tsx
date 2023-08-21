import { useEffect, useState } from 'react';
import { Flag } from "../types/flag";
import {Button} from "../components/Button";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


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
                 <Link className='button' to={'/'}><BsArrowLeft className='icon-ArrowLeft'/>Back</Link>   
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
                                  <span id='informationTitles' className='information-dates'>Native Name:<p>{country.name.official}</p></span>
                                  <span id='informationTitles' className='information-dates'>Population:<p>{country.population}</p></span>
                                  <span id='informationTitles' className='information-dates'>Region<p>{country.region}</p></span>
                                  <span id='informationTitles' className='information-dates'>Sub Region:<p>{country.subregion}</p></span>
                                  <span id='informationTitles' className='information-dates'>Capital:<p>{country.capital}</p></span>
                                </div>
                                <div className="information-flags-right-container">
                                  <span id='informationTitles' className='information-dates'>Top Level Domain:<p>{country.flag}</p></span>
                                  <span id='informationTitles' className='information-dates'>Currencie:<p>{+country.currencies}</p></span>
                                  <span id='informationTitles' className='information-dates'>Languages:<p>{+country.currencies}</p></span>
                                </div>
                            </div>
                            <div className="bottom-container">
                                <span id='informationTitles' className='information-dates'>Border Countries:<p>{+country.languages}</p></span>
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
