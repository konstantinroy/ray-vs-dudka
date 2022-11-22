import React from 'react'
import quotesMobPhoto from '../../../assets/img/QuotesMobPhoto.jpg'
import quotesPcPhoto from '../../../assets/img/QuotesPcPhoto.jpg'
import styles from '../Quotes/Quotes.module.scss'

function Quotes() {
    return (
        <a href='/'><div className={styles.quotesPhotoBlock}>
            <img className={styles.quotesPcPhoto} src={quotesPcPhoto} alt='' ></img>
            <img className={styles.quotesMobPhoto} src={quotesMobPhoto} alt='' ></img>
            {/* <p className={styles.quotesText}>Лучшие цитаты Рая и Дудки</p> */}
        </div></a>
    )
}

export default Quotes
