
const Select = ({className, id}: IProps) => {
    return(
        <select className={className} id={id}>
                        <option value="Filter">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oseania">Oseania</option>
                    </select>
    );
};

type IProps = {
    className?: string;
    id?: string;
}
export{Select}