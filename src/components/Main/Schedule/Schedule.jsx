import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import scheduleMobPhoto from '../../../assets/img/GoldenBallMob.jpg'
import schedulePcPhoto from '../../../assets/img/GoldenBallPc.jpg'
import styles from '../Schedule/Schedule.module.scss'
import ShedulePage from '../../ShedulePage/ShedulePage'
import Main from '../../../App.js'

function Schedule() {
    return (
        <BrowserRouter>
        <a href='/shedulepage'><div className={styles.schedulePhotoBlock} >
            <img className={styles.schedulePcPhoto} src={schedulePcPhoto} alt='' ></img>
            <img className={styles.scheduleMobPhoto} src={scheduleMobPhoto} alt='' ></img>
            <p className={styles.scheduleText}>Расписание ближайших каток</p>
            <Routes>
                {/* <Route path="/" component={Card} /> */}
                <Route exact path="/main" element={Main}></Route>
                <Route path="/shedulepage" element={ShedulePage}></Route>
            </Routes>
        </div></a>
        </BrowserRouter>
    )
}

export default Schedule
