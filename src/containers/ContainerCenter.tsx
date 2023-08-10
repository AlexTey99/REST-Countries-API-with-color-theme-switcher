import { Input } from "../components/Input";
import {ItemFlag} from "../components/ItemFlag";
import {Select} from "../components/Select";
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
                <Select className="selector"/>
            </div>
            <div id="containerFlags" className="container-flags">
                {flags.map((elemetFlag) => (
                  <ItemFlag flag={elemetFlag}/>
                ))}
            </div>
        </div>
    );
};

export{ContainerCenter};