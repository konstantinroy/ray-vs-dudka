import React from 'react'
import { Link } from 'react-router-dom';
import audioMobPhoto from '../../../assets/img/AudioMobPhoto.jpg'
import audioPcPhoto from '../../../assets/img/AudioPcPhoto.jpg'
import '../Audio/Audio.css'

function Audio() {
    return (
        <Link to='/audio'><div className="audioPhotoBlock">
            <img className="audioPcPhoto" src={audioPcPhoto} alt='' ></img>
            <img className="audioMobPhoto" src={audioMobPhoto} alt='' ></img>
            {/* <p className=audioText}>Все аудио 
            в одном 
            месте</p> */}
        </div></Link>
    )
}

export default Audio
