function Dropdwon({title,option,func}){
    return(
        <>
        <div className="select m-3"> 
            <select onChange={func} defaultValue="0" name="format" id="format" >
                <option value="0">{title}</option>
                {option.map((o,i)=>(
                     <option key={i} value={o}>{o.toUpperCase()}</option>
                ))}
            </select>
        </div>
        </>
    )
}

 export default Dropdwon