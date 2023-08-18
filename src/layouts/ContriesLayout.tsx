import { Outlet } from "react-router-dom";
import {Header} from "../components/Header";

const CountriesLayout = () => {

  const PressMoon = () => {
    console.log("helo");
    
    
  }


  return (
    <div className="layout">
    <div className="layout_header">
      <Header onClick={PressMoon}/>
    </div>
    <div className="layout_main-content">
      <Outlet />
    </div>
    </div>
  );
 
};

export { CountriesLayout };