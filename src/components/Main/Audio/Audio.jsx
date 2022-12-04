import React from 'react'
import audioMobPhoto from '../../../assets/img/AudioMobPhoto.jpg'
import audioPcPhoto from '../../../assets/img/AudioPcPhoto.jpg'
import '../Audio/Audio.css'

function Audio() {
    return (
        <a href='/audio'><div className="audioPhotoBlock">
            <img className="audioPcPhoto" src={audioPcPhoto} alt='' ></img>
            <img className="audioMobPhoto" src={audioMobPhoto} alt='' ></img>
            {/* <p className=audioText}>Все аудио 
            в одном 
            месте</p> */}
        </div></a>
    )
}

export default Audio
