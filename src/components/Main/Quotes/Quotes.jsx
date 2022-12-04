import React from 'react'
import quotesMobPhoto from '../../../assets/img/QuotesMobPhoto.jpg'
import quotesPcPhoto from '../../../assets/img/QuotesPcPhoto.jpg'
import '../Quotes/Quotes.css'

function Quotes() {
    return (
        <a href='/'><div className="quotesPhotoBlock">
            <img className="quotesPcPhoto" src={quotesPcPhoto} alt='' ></img>
            <img className="quotesMobPhoto" src={quotesMobPhoto} alt='' ></img>
            {/* <p className=quotesText}>Лучшие цитаты Рая и Дудки</p> */}
        </div></a>
    )
}

export default Quotes
