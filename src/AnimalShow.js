import './AnimalShow.css';
import React, { useState } from 'react';
import App from './App';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap={
    bird, // this is the same as bird:bird, it can be used because the keys are the same as the value assigned to them
    cat,
    cow, 
    dog, 
    gator,
    horse, 
    heart
}

function AnimalShow({ type }){
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1)
    }
    return (
    <div className='animal-show' onClick={handleClick}> 
        <img className='animal' alt='animal' src={svgMap[type]} />
        <img className='heart'
        alt='heart' 
        src={heart}
        style={{width: 10 + 10 * clicks + 'px'}}//Used to increase the size of the heart
        />
    </div>
)
}

export default AnimalShow;