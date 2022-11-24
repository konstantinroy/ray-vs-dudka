import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./LocationsPage.module.scss";
import Carousel from "nuka-carousel/lib/carousel";
import LocationsPagePhoto from "../../assets/img/LocationsPagePhoto.jpg";
import DudaHomePhoto1 from "../../assets/img/photo_2022-11-24_19-26-02 (2).jpg";
import DudaHomePhoto2 from "../../assets/img/photo_2022-11-24_19-26-02.jpg";
import DudaHomePhoto3 from "../../assets/img/photo_2022-05-29_02-10-26.jpg";
import ParentsDudaHomePhoto from "../../assets/img/2_T3kVuwYc8.jpg";
import SyberXPhoto1 from "../../assets/img/L.jpg";
import SyberXPhoto2 from "../../assets/img/L2.jpg";
import SyberXPhoto3 from "../../assets/img/L3.jpg";
import NintendoPhoto1 from "../../assets/img/N.jpg";
import NintendoPhoto2 from "../../assets/img/N2.jpg";
import NintendoPhoto3 from "../../assets/img/N3.jpg";

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
            <h1 className={styles.heading}>Места проведения каток</h1>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Дома у Никиты</h1>
          <div className={styles.locationPhotoBlock}>
          <Carousel>
              <img src={DudaHomePhoto1} alt="" />
              <img src={DudaHomePhoto2} alt="" />
              <img src={DudaHomePhoto3} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Дома у родаков Никиты</h1>
          <div className={styles.locationPhotoBlock}>
          <Carousel>
              <img src={ParentsDudaHomePhoto} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Компьютерный клуб Syber X</h1>
          <div className={styles.locationPhotoBlock}>
          <Carousel>
              <img src={SyberXPhoto1} alt="" />
              <img src={SyberXPhoto2} alt="" />
              <img src={SyberXPhoto3} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Компьютерный клуб Syber X</h1>
          <div className={styles.locationPhotoBlock}>
          <Carousel>
              <img src={NintendoPhoto1} alt="" />
              <img src={NintendoPhoto2} alt="" />
              <img src={NintendoPhoto3} alt="" />
            </Carousel>
          </div>
        </div>



      </div>

      <Footer />
    </div>
  );
}

export default LocationsPage;
