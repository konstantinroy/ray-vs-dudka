import React from 'react'
import scheduleMobPhoto from '../../../assets/img/GoldenBallMob.jpg'
import schedulePcPhoto from '../../../assets/img/GoldenBallPc.jpg'
import '../Schedule/Schedule.css'

function Schedule() {
    return (
        <a href='/results'><div className="schedulePhotoBlock">
            <img className="schedulePcPhoto" src={schedulePcPhoto} alt='' ></img>
            <img className="scheduleMobPhoto" src={scheduleMobPhoto} alt='' ></img>
            {/* <p className="scheduleText">Расписание ближайших каток</p> */}
        </div></a>
    )
}

export default Schedule
