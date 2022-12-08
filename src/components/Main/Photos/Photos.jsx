import React from 'react'
import { Link } from 'react-router-dom';
import photosMobPhoto from '../../../assets/img/PhotosMobPhoto.jpg'
import photosPcPhoto from '../../../assets/img/PhotosPcPhoto.jpg'
import '../Photos/Photos.css'

function Photos() {
    return (
        <Link to='/photo'><div className="photosPhotoBlock">
            <img className="photosPcPhoto" src={photosPcPhoto} alt='' ></img>
            <img className="photosMobPhoto" src={photosMobPhoto} alt='' ></img>
            {/* <p className=photosText}>Лучшие фоточки за всё время</p> */}
        </div></Link>
    )
}

export default Photos
