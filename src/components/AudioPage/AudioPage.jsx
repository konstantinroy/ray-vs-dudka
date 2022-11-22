import React from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import "./AudioPage.scss";
import AudioPagePhoto from "../../assets/img/AudioPagePhoto.jpg";
import One from "../../assets/audio/1. Заключительный разговор Рая и Дудки.mp3";
import Two from "../../assets/audio/2. Райская месть.mp3";
import Three from "../../assets/audio/3. Расплата.mp3";
import Four from "../../assets/audio/4. Предатель должен умереть.mp3";
import Five from "../../assets/audio/5. Талантливый Никита Дудка.mp3";
import Six from "../../assets/audio/6. Мысли Дудки.mp3";
import Seven from "../../assets/audio/7. Наемник-Дудка.mp3";
import Eight from "../../assets/audio/8. Фифа.mp3";
import Nine from "../../assets/audio/9. Откровение Дудки.mp3";
import Ten from "../../assets/audio/10. День твоей смерти.mp3";
import Eleven from "../../assets/audio/11. Армия.mp3";
import Twelwe from "../../assets/audio/12. Он забрал мою душу.mp3";
import Thirteen from "../../assets/audio/13. Разговор Никиты со своим вторым Я.mp3";
import Fourteen from "../../assets/audio/14. Дружба Кости и Никиты.mp3";
import Fiveteen from "../../assets/audio/15. Раскаяние Рая.mp3";
import Sixteen from "../../assets/audio/16. Nikita Dudka best moments comp.mp3";
import Seventeen from "../../assets/audio/17. НРЖ.mp3";
import Eighteen from "../../assets/audio/18. Никита на приёме у психоаналитика.mp3";
import Nineteen from "../../assets/audio/19. Интервью Никиты Дудки после победы в финале Чемпионата мира по фифе.mp3";
import Twenteen from "../../assets/audio/20. Переговоры Рая и Куца.mp3";
import Twentyone from "../../assets/audio/21. Поздравление Никиты с днём рождения.mp3";
import Twentytwo from "../../assets/audio/22. Никита после того, как впервые за долгое время проиграл Косте в фифу.mp3";
import Twentythree from "../../assets/audio/23. Никита «не орёт», когда играет в фифу.mp3";
import Twentyfour from "../../assets/audio/24. Welcome to the party.mp3";
import Twentyfive from "../../assets/audio/25. Как Никита придумывает правила игры в фифу....mp3";
import Twentysix from "../../assets/audio/26. Хорошее настроение Никиты после победы над Костей.mp3";
import Twentyseven from "../../assets/audio/27. no pain no gain.wav";
import Twentyeight from "../../assets/audio/28. Молитва Никиты.mp3";
import Twentynine from "../../assets/audio/29. Никита Дудка - Песня про фифу.mp3";
import Thirty from "../../assets/audio/30. Рекламный ролик Матч тв к сегодняшнему матчу Рая и Дудки.mp3";
import Thirtyone from "../../assets/audio/31. Разговор Никиты с Максом.mp3";
import Thirtytwo from "../../assets/audio/32. Каким будет день, когда Никита починит xbox.mp3";
import Thirtythree from "../../assets/audio/33. Дуда сообщает Марку о результате катки.mp3";

function AudioPage() {
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

        <div className="audioBlock">
          <h2 className="audioName">Дуда сообщает Марку о результате катки</h2>
          <audio src={Thirtythree} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Каким будет день, когда Никита починит xbox</h2>
          <audio src={Thirtytwo} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Разговор Никиты с Максом</h2>
          <audio src={Thirtyone} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Рекламный ролик Матч тв к сегодняшнему матчу Рая и Дудки</h2>
          <audio src={Thirty} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Никита Дудка - Песня про фифу</h2>
          <audio src={Twentynine} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Молитва Никиты</h2>
          <audio src={Twentyeight} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">no pain no gain</h2>
          <audio src={Twentyseven} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Хорошее настроение Никиты после победы над Костей</h2>
          <audio src={Twentysix} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Как Никита придумывает правила игры в фифу</h2>
          <audio src={Twentyfive} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Welcome to the party</h2>
          <audio src={Twentyfour} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Никита «не орёт», когда играет в фифу</h2>
          <audio src={Twentythree} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Никита после того, как впервые за долгое время проиграл Косте в фифу</h2>
          <audio src={Twentytwo} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Поздравление Никиты с днём рождения</h2>
          <audio src={Twentyone} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Переговоры Рая и Куца</h2>
          <audio src={Twenteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Интервью Никиты Дудки после победы в финале Чемпионата мира по фифе</h2>
          <audio src={Nineteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Никита на приёме у психоаналитика</h2>
          <audio src={Eighteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">НРЖ</h2>
          <audio src={Seventeen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Nikita Dudka best moments comp</h2>
          <audio src={Sixteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Раскаяние Рая</h2>
          <audio src={Fiveteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Дружба Кости и Никиты</h2>
          <audio src={Fourteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Разговор Никиты со своим вторым Я</h2>
          <audio src={Thirteen} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Он забрал мою душу</h2>
          <audio src={Twelwe} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Армия</h2>
          <audio src={Eleven} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">День твоей смерти</h2>
          <audio src={Ten} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Откровение Дудки</h2>
          <audio src={Nine} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Фифа</h2>
          <audio src={Eight} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Наемник-Дудка</h2>
          <audio src={Seven} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Мысли Дудки</h2>
          <audio src={Six} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Талантливый Никита Дудка</h2>
          <audio src={Five} controls="controls"></audio>
        </div>

        <div className="audioBlock">
          <h2 className="audioName">Предатель должен умереть</h2>
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
