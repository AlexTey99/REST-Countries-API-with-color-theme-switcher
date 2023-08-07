import { Input } from "../components/Input";


const ContainerCenter = () => {
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
            
        </div>
    );
};

export{ContainerCenter};