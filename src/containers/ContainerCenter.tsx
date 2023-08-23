import { Input } from "../components/Input";
import {ItemFlag} from "../components/ItemFlag";
import {Select} from "../components/Select";
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


const ContainerCenter = () => {
    //Declaracion de variable
    const [flags, setFlags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectResults, setSelector] = useState('');

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
          setFlags(data); // Almacena el resultado de la API en un array
          setSearchResults(data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    useEffect(() => {
        /// Filtrar los productos que coinciden con el término de búsqueda en el título
          const filtered = flags.filter(flag =>
          flag.name.common.toLowerCase().includes(inputValue.trim().toLowerCase())
          );

          setSearchResults(filtered); //Actualizo el array con los valores filtrado

    }, [inputValue]);

    //Filtro para el selector
    useEffect(() => {
      /// Filtrar los productos que coinciden con el término de búsqueda en la region
      const filteredSelector = flags.filter(flag =>
        flag.region.toLowerCase().includes(selectResults.trim().toLowerCase())
        );

        setSearchResults(filteredSelector); //Actualizo el array con los valores filtrado
    },[selectResults]);

    return(
        <div className={"containerCenter"}>
            <div className="container-input">
                <AiOutlineSearch className="fa-magnifying-glass"/>
                <Input id="input"
                value={inputValue}
                handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
                }  
                className="input" placeholder="Search for a country" 
                />
                <Select 
                value={selectResults} 
                className="selector"
                handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelector(e.target.value)}
                />
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