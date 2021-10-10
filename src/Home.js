import { useState } from "react";

const Home = () => {
    
    // let name = 'Gary';
    const [name, setName] =useState('Gary');
    const [age, setAge] =useState(25);

    const handleClick = () => {
        setName('Adina');
        setAge(30);

        console.log('yo')
    }

    const handleClick2 = (name, e) => {
        console.log('yo ' + name, e.target)
    }


    return ( 
        <div className="home">
            <h2> HomePage</h2>
            <p>{name} is { age}  years old</p>
            <button onClick={handleClick}> Click me</button>
            <button onClick={(e) => handleClick2('Gary', e)}> Click me again</button>

        </div>
     );
}
 
export default Home;