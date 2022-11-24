import React from 'react'
import photosMobPhoto from '../../../assets/img/PhotosMobPhoto.jpg'
import photosPcPhoto from '../../../assets/img/PhotosPcPhoto.jpg'
import styles from '../Photos/Photos.module.scss'

function Photos() {
    return (
        <a href='/photo'><div className={styles.photosPhotoBlock}>
            <img className={styles.photosPcPhoto} src={photosPcPhoto} alt='' ></img>
            <img className={styles.photosMobPhoto} src={photosMobPhoto} alt='' ></img>
            {/* <p className={styles.photosText}>Лучшие фоточки за всё время</p> */}
        </div></a>
    )
}

export default Photos
