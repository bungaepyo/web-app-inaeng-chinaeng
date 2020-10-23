import React from 'react';
import '../styles/TimeCardList.css';
import TimeCard from './TimeCard'

function TimeCardList(props){
    // const cards = props.cards;
    // const listCards = cards.map(card =>
    //     {
    //         return <div className="cardList" key="card.key">
    //             <p>{card.text}</p>
    //             <TimeCard></TimeCard>
    //         </div>
    //     })
    return(
    // <div>{listCards}</div>
    <TimeCard></TimeCard>
    )
}

export default TimeCardList;