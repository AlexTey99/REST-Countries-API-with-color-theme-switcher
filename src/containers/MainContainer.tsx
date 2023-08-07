
import {Header} from "../containers/Header";
import {ContainerCenter} from "../containers/ContainerCenter";


const MainContainer = () => {
    return(
        <div className="mainContainer">
            <Header />
            <ContainerCenter />
        </div>
    );
};

export{MainContainer};