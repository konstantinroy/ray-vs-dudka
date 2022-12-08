import React from 'react'
import { Link } from 'react-router-dom';
import quotesMobPhoto from '../../../assets/img/QuotesMobPhoto.jpg'
import quotesPcPhoto from '../../../assets/img/QuotesPcPhoto.jpg'
import '../Quotes/Quotes.css'

function Quotes() {
    return (
        <Link to='/'><div className="quotesPhotoBlock">
            <img className="quotesPcPhoto" src={quotesPcPhoto} alt='' ></img>
            <img className="quotesMobPhoto" src={quotesMobPhoto} alt='' ></img>
            {/* <p className=quotesText}>Лучшие цитаты Рая и Дудки</p> */}
        </div></Link>
    )
}

export default Quotes
