import React from 'react'
import { Link } from 'react-router-dom';
import resultsMobPhoto from '../../../assets/img/results-mob-photo.jpg'
import resultsPcPhoto from '../../../assets/img/photo_2022-11-03_14-19-05.jpg'
import '../Results/Results.css'


function Results() {
    return (
        <Link to='/results'><div className="resultPhotoBlock" >
            <img className="resultsPcPhoto" src={resultsPcPhoto} alt='' ></img>
            <img className="resultsMobPhoto" src={resultsMobPhoto} alt='' ></img>
            <p className="resultsText">Результаты всех матчей сезона</p>
        </div></Link>
    )
}

export default Results
