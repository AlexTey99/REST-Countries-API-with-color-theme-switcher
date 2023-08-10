import { Input } from "../components/Input";
import {ItemFlag} from "../components/ItemFlag";

import { useEffect, useState } from 'react';


const ContainerCenter = () => {

    const [flags, setFlags] = useState([]);

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
          setFlags(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    return(
        <div className="containerCenter">
            <div className="container-input">
                <Input className="input" placeholder="Search for a country" />
                    <select className="selector" id="frutas">
                        <option value="Filter">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oseania">Oseania</option>
                    </select>
            </div>
            <div id="containerFlags" className="container-flags">
                {flags.map((flag) => (
                  <ItemFlag flag={flag}/>
                ))}   
            </div>
        </div>
    );
};

export{ContainerCenter};