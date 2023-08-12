import { Input } from "../components/Input";
import {ItemFlag} from "../components/ItemFlag";
import {Select} from "../components/Select";
import { useEffect, useState } from 'react';


const ContainerCenter = () => {
    //Declaracion de variable
    const [flags, setFlags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
          setFlags(data); // Almacena los resultados de la API en un array
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    useEffect(() => {
        /// Filtrar los nombres de paises
          const filtered = flags.filter(flag =>
          flag.name.common.toLowerCase().includes(inputValue.trim().toLowerCase())
          );

          setFlags(filtered); // Actualizo el array Flag en base al filtrado

    }, [inputValue]);


    return(
        <div className="containerCenter">
            <div className="container-input">
                <Input id="input"
                value={inputValue}
                handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}  
                className="input" 
                placeholder="Search for a country" 
                />
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