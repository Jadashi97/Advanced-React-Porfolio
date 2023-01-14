import React, {useState} from 'react';

const LearnHooks = () => {
    // const [greeting, setGreeting] = useState({greet: "Sabahal Keerr, Dunia"}); // only one property updates here
    
    const [greeting, setGreeting] = useState({
        greet:'Hello',
        place: "World"
    });
    console.log(greeting, setGreeting)

    function updateGreeting(){
        // const newGreeting = {...greeting};
        // newGreeting.greet = "yasallam sabahal keer";
        setGreeting(prevState => {
            return {...prevState, place: "Sabahal Keerr"}
        });
    }

    return (
        <div>
            <h1>{greeting.greet}, {greeting.place}</h1>
            <button onClick={updateGreeting} style={{backgroundColor: "black"}}>Update greeting</button>
        </div>
    )
}

export default LearnHooks;
