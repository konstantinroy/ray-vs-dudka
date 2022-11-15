import React from 'react'
import resultsMobPhoto from '../../../assets/img/results-mob-photo.jpg'
import resultsPcPhoto from '../../../assets/img/photo_2022-11-03_14-19-05.jpg'
import styles from '../Results/Results.module.scss'


function Results() {
    return (
        <a href='/shedule'><div className={styles.resultPhotoBlock} >
            <img className={styles.resultsPcPhoto} src={resultsPcPhoto} alt='' ></img>
            <img className={styles.resultsMobPhoto} src={resultsMobPhoto} alt='' ></img>
            <p className={styles.resultsText}>Результаты всех матчей сезона</p>
        </div></a>
    )
}

export default Results
