import { useState, useEffect } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import BackToTopButton from './../CommonComponents/BackToTopButton/BackToTopButton.js'
import AudiosArrayData from "./AudiosArray";
import AudioList from "./AudioList";
import "./AudioPage.scss";
import AudioPagePhoto from "../../assets/img/AudioPagePhoto.jpg";
import { useCallback } from "react";

const filterAudios = (searchText, listOfAudios) => {
  if (!searchText) {
    return listOfAudios;
  }
  return listOfAudios.filter(({ audio_name }) =>
    audio_name.toLowerCase().includes(searchText.toLowerCase())
  );
};

function AudioPage() {
  // Функция для того, чтобы на странице проигрывалась только одна аудио-дорожка одновременно
  document.addEventListener(
    "play",
    (event) => {
      const audios = [...document.getElementsByTagName("audio")];

      audios.forEach((audio) => audio !== event.target && audio.pause());
    },
    true
  );
  //////////////////////

  const [sortType, setSortType] = useState('asc');
  const [searchTerm, setSearchTerm] = useState("");
  const [audioList, setAudioList] = useState(AudiosArrayData);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredAudios = filterAudios(searchTerm, AudiosArrayData);
      setAudioList(filteredAudios);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  const onSortClick = useCallback((e) => {
    setSortType(e.target.value);

    setAudioList((prevState) => {
      if (e.target.value === 'asc') {
        return [...prevState.sort((prev, next) => next.id - prev.id)];
      }
      
      if (e.target.value === 'desc') {
        return [...prevState.sort((prev, next) => prev.id - next.id)];
      }
    });
  }, []);

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
            // autoFocus
            // type="text"
            autoComplete="off"
            placeholder="Поиск по аудио"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            name="sort"
            value={sortType}
            onChange={onSortClick}
          >
            <option
              value="asc"
            >
              Сортировка: самые последние
            </option>
            <option
              value="desc"
            >
              Сортировка: самые ранние
            </option>
          </select>
        </div>

        <AudioList audioList={audioList} />
        <BackToTopButton />
      </div>

      <Footer />
    </div>
  );
}

export default AudioPage;
