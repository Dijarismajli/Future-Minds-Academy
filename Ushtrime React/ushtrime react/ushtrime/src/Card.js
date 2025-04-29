import './Card.css';
import React from 'react'

function Card({ name, occupation }) {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return <div className='card'>
        <div style={{ backgroundColor: getRandomColor() }} className='avatar'>{name?.charAt(0)}</div>
        <div className='card-data-container'>
            <h4>{name}</h4>
            <h6>{occupation}</h6>
        </div>
    </div>
}

export default Card


