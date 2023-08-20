import { Outlet } from "react-router-dom";
import {Header} from "../components/Header";
import { useState } from 'react';
import {Theme} from "../types/theme";

const CountriesLayout = () => {
  const [theme, setTheme] = useState<Theme>('dark'); // Coje el tipo Theme y lo inicializa en dark.

  const switchThemes = () =>{
    if (theme == "dark"){
      setTheme("white")
    } else {
      setTheme("dark")
    }
  }


  return (
    <div className="layout">
      <div className="layout_header">
        <Header className= {'header '+theme} onClick={switchThemes}/>
      </div>
      <div className='layout_main-content'>
        <Outlet />
      </div>
    </div>
  );
 
};

export {CountriesLayout}; 