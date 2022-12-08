import React from 'react'
import { Link } from 'react-router-dom';
import locationsMobPhoto from '../../../assets/img/photo_2022-05-29_02-10-22(Mob).jpg'
import locationsPcPhoto from '../../../assets/img/photo_2022-05-29_02-10-22.jpg'
import '../Locations/Locations.css'

function Locations() {
    return (
        <Link to='/locations'><div className="locationsPhotoBlock" >
            <img className="locationsPcPhoto" src={locationsPcPhoto} alt='' ></img>
            <img className="locationsMobPhoto" src={locationsMobPhoto} alt='' ></img>
            {/* <p className=locationsText}>Места проведения каток</p> */}
        </div></Link>
    )
}

export default Locations
