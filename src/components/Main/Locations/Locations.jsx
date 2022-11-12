import React from 'react'
import locationsMobPhoto from '../../../assets/img/photo_2022-05-29_02-10-22(Mob).jpg'
import locationsPcPhoto from '../../../assets/img/photo_2022-05-29_02-10-22.jpg'
import styles from '../Locations/Locations.module.scss'

function Locations() {
    return (
        <a href='/'><div className={styles.locationsPhotoBlock} >
            <img className={styles.locationsPcPhoto} src={locationsPcPhoto} alt='' ></img>
            <img className={styles.locationsMobPhoto} src={locationsMobPhoto} alt='' ></img>
            <p className={styles.locationsText}>Места проведения каток</p>
        </div></a>
    )
}

export default Locations
