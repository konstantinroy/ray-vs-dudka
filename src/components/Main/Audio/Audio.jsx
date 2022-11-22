import React from 'react'
import audioMobPhoto from '../../../assets/img/AudioMobPhoto.jpg'
import audioPcPhoto from '../../../assets/img/AudioPcPhoto.jpg'
import styles from '../Audio/Audio.module.scss'

function Audio() {
    return (
        <a href='/audio'><div className={styles.audioPhotoBlock}>
            <img className={styles.audioPcPhoto} src={audioPcPhoto} alt='' ></img>
            <img className={styles.audioMobPhoto} src={audioMobPhoto} alt='' ></img>
            {/* <p className={styles.audioText}>Все аудио 
            в одном 
            месте</p> */}
        </div></a>
    )
}

export default Audio
