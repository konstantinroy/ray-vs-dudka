import React from 'react'
import photosMobPhoto from '../../../assets/img/PhotosMobPhoto.jpg'
import photosPcPhoto from '../../../assets/img/PhotosPcPhoto.jpg'
import '../Photos/Photos.css'

function Photos() {
    return (
        <a href='/photo'><div className="photosPhotoBlock">
            <img className="photosPcPhoto" src={photosPcPhoto} alt='' ></img>
            <img className="photosMobPhoto" src={photosMobPhoto} alt='' ></img>
            {/* <p className=photosText}>Лучшие фоточки за всё время</p> */}
        </div></a>
    )
}

export default Photos
