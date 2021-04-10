import React from 'react'

import './Card.css'

//variable dans laquelle on stocke l'image de la card non retournée.
const HIDDEN_SYMBOL = '❓'

//props de Card :
// card = symbole à afficher
// feedback = état visuel de la carte, masquée ou visible

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
        {/* La classe de la div sera card masquée ou visible */}
        <span className="symbol">
            {/* Si feedback est 'hidden' on affiche le gros point d'interrogation rouge (la constante définie ligne 6), sinon on affiche la carte */}
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card