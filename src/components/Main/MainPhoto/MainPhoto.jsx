import React from 'react'
import pcPhoto from '../../../assets/img/pc-photo.jpg'
import mobilePhoto from '../../../assets/img/mobile-photo.jpg'
import '../MainPhoto/MainPhoto.css'

function MainPhoto() {
    return (
        <div>
            <div className="main-photo-block">
            <img className="pcPhoto" src={pcPhoto} alt='' ></img>
            <img className="mobilePhoto" src={mobilePhoto} alt='' ></img>
            <div className="mainPhotoText">
            <p className="mainPhotoText-1">Величайшее</p>
            <p className="mainPhotoText-2">противостояние</p>
            <p className="mainPhotoText-3">в истории</p>
            <p className="mainPhotoText-4">спорта</p>
            </div>
            </div>
        </div>
    )
}

export default MainPhoto
