import React from 'react'
import locationsMobPhoto from '../../../assets/img/photo_2022-05-29_02-10-22(Mob).jpg'
import locationsPcPhoto from '../../../assets/img/photo_2022-05-29_02-10-22.jpg'
import '../Locations/Locations.css'

function Locations() {
    return (
        <a href='/locations'><div className="locationsPhotoBlock" >
            <img className="locationsPcPhoto" src={locationsPcPhoto} alt='' ></img>
            <img className="locationsMobPhoto" src={locationsMobPhoto} alt='' ></img>
            {/* <p className=locationsText}>Места проведения каток</p> */}
        </div></a>
    )
}

export default Locations
