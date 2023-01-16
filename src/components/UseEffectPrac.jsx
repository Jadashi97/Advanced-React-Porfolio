import React, { useEffect, useState } from 'react';

const UseEffectPrac = () => {
    // const [btcData, setBtcData] = useState({});

    const [user, setUser] = useState([]);

    // const fetchData = ()=> {
    //     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    //     .then((response)=> response.json())
    //     .then((jsonData)=> setBtcData(jsonData.bpi.USD))
    //     .catch((error) => console.log(error));
    // }

    const fetchData = ()=>{
        fetch("https://randomuser.me/api/?results=1")
        .then((response) => response.json())
        .then((data)=> setUser(data));
    }

    useEffect(()=> {
      fetchData();
    }, []);

    return (
        Object.keys(user).length > 0 ? (
            <div style={{padding: "40px"}}>
                <h1>Customer data</h1>
                <h2>Name: {user.results[0].name.first}</h2>
                <img src={user.results[0].picture.large} alt=""/>
            </div>
        ) : (
            <h1>Data pending....</h1>
        )
    

        // <>
        //     <div style={{flex: 1, padding: "60px"}}>
        //     <h1>Current BTC/USD data</h1>
        //     <p>Code: {btcData.code}</p>
        //     <p>Symbol: {btcData.symbol}</p>
        //     <p>Rate: {btcData.rate}</p>
        //     <p>Description: {btcData.description}</p>
        //     <p>Rate Float: {btcData.rate_float}</p>
        //     </div>
        // </>
    );
}

export default UseEffectPrac
