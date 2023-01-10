import './App.css';
import React, {useState} from 'react';
import AnimalShow from './AnimalShow';


function getRrandomAnimal (){
    const animals= ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random() * animals.length)];
};
console.log(getRrandomAnimal())

function App () {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRrandomAnimal()]) //Creates a new array with our existing animals in addition to one more
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow 
            type={animal} 
            key={index} />
    })

    return (
    <div className='app'>
        <button  onClick={handleClick}>Add Animal</button>
        <div className='animal-list'>{renderedAnimals}</div>
    </div>
)
}

export default App;