import { Input } from "../components/Input";
import {ItemFlag} from "../components/ItemFlag";
import {Select} from "../components/Select";
import { useEffect, useState } from 'react';
import React, { KeyboardEvent, ChangeEvent } from 'react';


const ContainerCenter = () => {
    //Declaracion de variable
    const [flags, setFlags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
          setFlags(data); // Almacena el API en un array
          setSearchResults(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    useEffect(() => {
        /// Filtrar los productos que coinciden con el término de búsqueda en el título
          const filtered = flags.filter(product =>
          product.name.common.toLowerCase().includes(inputValue.trim().toLowerCase())
          );

          setSearchResults(filtered);

    }, [inputValue]);


    return(
        <div className="containerCenter">
            <div className="container-input">
                <Input id="input"
                value={inputValue}
                handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
                }  
                className="input" placeholder="Search for a country" 
                />
                <Select className="selector"/>
            </div>
            <div id="containerFlags" className="container-flags">
                {searchResults.map((elemetFlag) => (
                  <ItemFlag flag={elemetFlag}/>
                ))}
            </div>
        </div>
    );
};

export{ContainerCenter};