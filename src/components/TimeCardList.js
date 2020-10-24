import React from 'react';
import '../styles/TimeCardList.css';
// import TimeCard from './TimeCard'

function TimeCardList(props){
    const cards = props.cards;
    console.log(cards)
    // const listCards = cards.map(card =>
    //     {
    //         return <div className="cardList">
    //             <p>{card.key}</p>

    //         </div>
    //     })
    return(
    // <div>{listCards}</div>
    <p>{cards}</p>
    )
}

export default TimeCardList;