import React from 'react';
import './card.style.css';

export const Card = (props)=>{
    return(
        <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set${props.id}&size=180x180`} />
            <h2> {props.monster.name} </h2>
            <h2> {props.monster.email} </h2>
        </div>
    );
}