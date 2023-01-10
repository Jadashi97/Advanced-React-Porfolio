const MullaList = (props)=>{

    const lowCalorieMulla = props.data
        .filter((mulla)=> {
            return mulla.calories < 500;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((mulla)=> {
            return(
                <li>
                    {mulla.name} - {mulla.calories} cal
                </li>
            )
        })
    return(
        <ul>{lowCalorieMulla}</ul>
    )
}

export default MullaList;