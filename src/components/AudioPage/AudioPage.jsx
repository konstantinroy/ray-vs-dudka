import React from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import "./AudioPage.scss";
import ShedulePagePhoto from "../../assets/img/ShedulePage-photo.jpg";
import One from "../../assets/audio/Заключительный разговор Рая и Дудки.mp3";
import Two from "../../assets/audio/Райская месть.mp3";
import Three from "../../assets/audio/Расплата.mp3";
import Four from "../../assets/audio/Талантливый Никита Дудка.mp3";
import Five from "../../assets/audio/Предатель должен умереть.mp3";
import Six from "../../assets/audio/Фифа.mp3";
import Seven from "../../assets/audio/Наемник-Дудка.mp3";
import Eight from "../../assets/audio/Мысли Дудки.mp3";
import Nine from "../../assets/audio/Откровение Дудки.mp3";
import Ten from "../../assets/audio/Армия.mp3";

function AudioPage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="audioHeading">
          <div className="pagePhotoBlock">
            <img className="audioPagePhoto" src={ShedulePagePhoto} alt=""></img>
          </div>
          <div className="headingText">
            <h1 className="heading">Все аудио в одном месте</h1>
          </div>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Армия</h2>
          <audio src={Ten} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Откровение Дудки</h2>
          <audio src={Nine} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Мысли Дудки</h2>
          <audio src={Eight} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Наемник-Дудка</h2>
          <audio src={Seven} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Фифа</h2>
          <audio src={Six} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Предатель должен умереть</h2>
          <audio src={Five} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Талантливый Никита Дудка</h2>
          <audio src={Four} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Расплата</h2>
          <audio src={Three} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Райская месть</h2>
          <audio src={Two} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Заключительный разговор Рая и Дудки</h2>
          <audio src={One} controls="controls"></audio>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AudioPage;
