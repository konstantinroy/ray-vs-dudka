import { useState, useEffect } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import AudiosArray from "./AudiosArray";
import AudioList from "./AudioList";
import "./AudioPage.scss";
import AudioPagePhoto from "../../assets/img/AudioPagePhoto.jpg";

const filterAudios = (searchText, listOfAudios) => {
  if (!searchText) {
    return listOfAudios;
  }
  return listOfAudios.filter(({ audio_name }) =>
    audio_name.toLowerCase().includes(searchText.toLowerCase())
  );
};
const data = AudiosArray;

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

  const [searchTerm, setSearchTerm] = useState("");
  const [audioList, setAudioList] = useState(data);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredAudios = filterAudios(searchTerm, data);
      setAudioList(filteredAudios);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  // const fn = () => {
  //   data.sort((prev, next) => next.id - prev.id);
  // }
  // <AudiosArray fn={fn} />


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
          <select name="sort">
            <option selected value="new"
            // onClick={sortNewest}
            >
              Сортировка: самые последние
            </option>
            <option value="old"
            // onClick={sortOldest}
            >Сортировка: самые ранние</option>
          </select>
        </div>

        <AudioList audioList={audioList} />
      </div>

      <Footer />
    </div>
  );
}

export default AudioPage;
