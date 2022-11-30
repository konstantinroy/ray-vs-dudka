import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import audiosArray from "./audiosArray";
import AudioBlock from "./AudioBlock";
import "./AudioPage.scss";
import AudioPagePhoto from "../../assets/img/AudioPagePhoto.jpg";

function AudioPage() {
  document.addEventListener(
    "play",
    (event) => {
      const audios = [...document.getElementsByTagName("audio")];

      audios.forEach((audio) => audio !== event.target && audio.pause());
    },
    true
  );

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="audioHeading">
          <div className="pagePhotoBlock">
            <img className="audioPagePhoto" src={AudioPagePhoto} alt=""></img>
          </div>
          <div className="headingText">
            <h1 className="heading">Все аудио в одном месте</h1>
          </div>
        </div>

        <div className="inputBlock">
          <input
            // value={searchTerm}
            // autoFocus
            // type="text"
            autoComplete="off"
            placeholder="Поиск по аудио"
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select name="sort">
            <option selected value="new">Сортировка: самые последние</option>
            <option value="old">Сортировка: самые ранние</option>
          </select>
        </div>

        <div>
          {audiosArray.map((audio) => {
            return <AudioBlock key={audio.id} {...audio} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AudioPage;
