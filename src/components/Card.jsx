import React from 'react'

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="elements__card">
            <img className="elements__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick}></img>
            <div className="elements__container">
                <h2 className="elements__title">{props.card.name}</h2>
                <div className="elements__like">
                    <button type="button" className="elements__like-button"></button>
                    <span className="elements__like-count">{props.card.likes.length}</span>
                </div>
            </div>
            <button className="elements__remove-button" type="button"></button>
        </li>
    )
}

export default Card