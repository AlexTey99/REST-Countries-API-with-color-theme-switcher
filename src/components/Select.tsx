
const Select = ({className, id, value, handleInputChange}: IProps) => {
    return(
        <select className={className} id={id} onChange={handleInputChange}  value={value}>
                        <option value="" disabled selected hidden>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
    );
};

type IProps = {
    className?: string;
    id?: string;
    value?: string;
    handleInputChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export{Select}