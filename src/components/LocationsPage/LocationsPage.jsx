import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./LocationsPage.module.scss";
import LocationsPagePhoto from "../../assets/img/LocationsPagePhoto.jpg";
import DudaHomePhoto1 from "../../assets/img/photo_2022-05-29_02-10-12.jpg";
import DudaHomePhoto2 from "../../assets/img/photo_2022-05-29_02-10-12 (2).jpg";
import DudaHomePhoto3 from "../../assets/img/photo_2022-05-29_02-10-13 (2).jpg";
import DudaHomePhoto4 from "../../assets/img/photo_2022-05-29_02-10-13.jpg";
import { Carousel } from './carousel/Carousel.js'
import './caruselStyles.css'


function LocationsPage() {
    return (
        <div>
            <Navbar />
      <div className={styles.content}>
        <div className={styles.locationsPageHeading}>
          <div className={styles.pagePhotoBlock}>
            <img
              className={styles.locationsPagePhoto}
              src={LocationsPagePhoto}
              alt=""
            ></img>
          </div>
          <div className={styles.headingText}>
            <h1
            className={styles.heading}
            >Места проведения каток</h1>
          </div>
        </div>


        <div className={styles.locationInfoBlock}>
        <h1>Дома у Никиты</h1>
        <div className={styles.locationPhotoBlock}>
        <Carousel>
          <div className="item">
          <img
              src={DudaHomePhoto1}
              alt=""
            ></img>
          </div>
          <div className="item">
          <img
              src={DudaHomePhoto2}
              alt=""
            ></img>
          </div>
          <div className="item">
          <img
              src={DudaHomePhoto3}
              alt=""
            ></img>
          </div>
          <div className="item">
          <img
              src={DudaHomePhoto4}
              alt=""
            ></img>
          </div>
        </Carousel>

        </div>
        </div>
    
        


      </div>

      <Footer />
        </div>
    )
}

export default LocationsPage
