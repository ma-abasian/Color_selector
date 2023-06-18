
const Selector = ({colors,onChange}) => {
    return (


        <div>
            <select name="colors" id="" onChange={(e)=>onChange(e.target.value)}>
                {colors.map(({label,value})=> <option value={value}>{label}</option>)}
            </select>
        </div>
    );
};


export default Selector;