import { Flag } from "../types/flag";
import {Button} from "../components/Button";

const CountryDetailContainer = ({flag}: IProps) =>{

    return(
        <div className="layout-major-container">
            <div className="layot-main-container">
                <div className="button-container">
                    <i className="fa-sharp fa-solid fa-arrow-left"></i>
                    <Button className="button"/>
                    <div id="informationFlagContainer" className="information-flag-container"></div>
                </div>
                
            </div>
             
        </div>
       
    );
};

type IProps = {
    flag: Flag;
}

export{CountryDetailContainer};
