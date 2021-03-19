import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';


export const CardList = (props) => {
    return (
    <div className="card-list">
        {
                props.monsters
                .map(band => (
                  <Card key={band.id} monster={band}></Card>
                ))}
    </div>

    )
}