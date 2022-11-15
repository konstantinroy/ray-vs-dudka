import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./ShedulePage.module.scss";
import ShedulePagePhoto from "../../assets/img/ShedulePage-photo.jpg";

function ShedulePage() {
  const [buttonText1, setButtonText1] = React.useState("ᐯ");
  const [buttonText2, setButtonText2] = React.useState("ᐯ");
  const [buttonText3, setButtonText3] = React.useState("ᐯ");
  const [buttonText4, setButtonText4] = React.useState("ᐯ");
  const [buttonText5, setButtonText5] = React.useState("ᐯ");

  const [isArrowClicked1, setIsArrowClicked1] = useState(false);
  const [isArrowClicked2, setIsArrowClicked2] = useState(false);
  const [isArrowClicked3, setIsArrowClicked3] = useState(false);
  const [isArrowClicked4, setIsArrowClicked4] = useState(false);
  const [isArrowClicked5, setIsArrowClicked5] = useState(false);

  const onButtonClick1 = () => (
    !isArrowClicked1 ? setButtonText1("ᐱ") : setButtonText1("ᐯ"),
    setIsArrowClicked1(!isArrowClicked1)
  );
  const onButtonClick2 = () => (
    !isArrowClicked2 ? setButtonText2("ᐱ") : setButtonText2("ᐯ"),
    setIsArrowClicked2(!isArrowClicked2)
  );
  const onButtonClick3 = () => (
    !isArrowClicked3 ? setButtonText3("ᐱ") : setButtonText3("ᐯ"),
    setIsArrowClicked3(!isArrowClicked3)
  );
  const onButtonClick4 = () => (
    !isArrowClicked4 ? setButtonText4("ᐱ") : setButtonText4("ᐯ"),
    setIsArrowClicked4(!isArrowClicked4)
  );
  const onButtonClick5 = () => (
    !isArrowClicked5 ? setButtonText5("ᐱ") : setButtonText5("ᐯ"),
    setIsArrowClicked5(!isArrowClicked5)
  );

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.sheduleHeading}>
          <div className={styles.pagePhotoBlock}>
            <img
              className={styles.shedulePagePhoto}
              src={ShedulePagePhoto}
              alt=""
            ></img>
          </div>
          <div className={styles.headingText}>
            <h1
            className={styles.heading}
            >Расписание и результаты всех каток 2022-го года</h1>
          </div>
        </div>
        <div className={styles.matchDayBlock}>
          <h2 
          className={styles.dateText}
          >25-ое февраля (ОФИЦИАЛЬНАЯ КАТКА)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 3-6 Рай</h1>
          <div className={styles.resultList}>
            <h3
            className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked1 ? "35vw" : "0",
                overflow: !isArrowClicked1 ? "visible" : "hidden",
                transition: !isArrowClicked1 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked1 ? "0" : "100vw",
                overflow: !isArrowClicked1 ? "hidden" : "visible",
                transition: !isArrowClicked1 ? "0.7s" : "0.2s",
              }}
            >
              <li>Реал 0-1 Челси</li>
              <li>МЮ 0-3 ПСЖ</li>
              <li>Челси 0-3 Реал</li>
              <li>Атлетико 3-2 Бавария</li>
              <li>Реал 1-3 ПСЖ</li>
              <li>МЮ 4-2 Ливерпуль</li>
              <li>Бавария 1-3 Реал</li>
              <li>ПСЖ 0-2 МЮ</li>
              <li>Атлетико 6-2 Арсенал</li>
              <li>Атлетико 3-3 ПСЖ (ничья)</li>
              <h3
              className={styles.goalsQuotes}>Счёт голов: 18-24</h3>
            </uL>
            <button
              onClick={onButtonClick1}
              style={{
                marginTop: !isArrowClicked1 ? "0" : "2vw",
              }}
            >
              {buttonText1}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >12 марта (ОФИЦИАЛЬНАЯ КАТКА)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 3-1 Рай</h1>
          <div className={styles.resultList}>
            <h3
            className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked2 ? "35vw" : "0",
                overflow: !isArrowClicked2 ? "visible" : "hidden",
                transition: !isArrowClicked2 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked2 ? "0" : "100vw",
                overflow: !isArrowClicked2 ? "hidden" : "visible",
                transition: !isArrowClicked2 ? "0.7s" : "0.2s",
              }}
            >
              <li>Атлетико 2-2 ПСЖ (ничья)</li>
              <li>Реал 1-1 МЮ (ничья)</li>
              <li>Мю 3-2 Челси</li>
              <li>Бавария 5-0 Реал</li>
              <li>Атлетико 0-3 ПСЖ</li>
              <li>Челси 5-3 Тоттенхэм</li>
              <li>Арсенал 2-2 Сити (ничья)</li>
              <h3 
              className={styles.goalsQuotes}>Счёт голов: 18-13</h3>
            </uL>
            <button
              onClick={onButtonClick2}
              style={{
                marginTop: !isArrowClicked2 ? "0" : "2vw",
              }}
            >
              {buttonText2}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >10 апреля (ОФИЦИАЛЬНАЯ КАТКА)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 3-4 Рай</h1>
          <div className={styles.resultList}>
            <h3
            className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked3 ? "35vw" : "0",
                overflow: !isArrowClicked3 ? "visible" : "hidden",
                transition: !isArrowClicked3 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked3 ? "0" : "100vw",
                overflow: !isArrowClicked3 ? "hidden" : "visible",
                transition: !isArrowClicked3 ? "0.7s" : "0.2s",
              }}
            >
              <li>Бавария 2-1 ПСЖ</li>
              <li>Реал 0-1 МЮ</li>
              <li>Атлетико 1-3 Ливерпуль</li>
              <li>МЮ 0-1 Реал</li>
              <li>Челси 1-3 МС</li>
              <li>МЮ 3-2 Ливерпуль</li>
              <li>Бавария 3-1 ПСЖ</li>
              <h3 
              className={styles.goalsQuotes}>Счёт голов: 10-12</h3>
            </uL>
            <button
              onClick={onButtonClick3}
              style={{
                marginTop: !isArrowClicked3 ? "0" : "2vw",
              }}
            >
              {buttonText3}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >20 мая (ОФИЦИАЛЬНАЯ КАТКА)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 2-2 Рай</h1>
          <div className={styles.resultList}>
            <h3
            className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked4 ? "35vw" : "0",
                overflow: !isArrowClicked4 ? "visible" : "hidden",
                transition: !isArrowClicked4 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked4 ? "0" : "100vw",
                overflow: !isArrowClicked4 ? "hidden" : "visible",
                transition: !isArrowClicked4 ? "0.7s" : "0.2s",
              }}
            >
              <li>МЮ 3-1 ПСЖ</li>
              <li>Бавария 1-1 Ливерпуль (ничья)</li>
              <li>Реал 0-4 МЮ</li>
              <li>МЮ 2-4 МС</li>
              <li>Бавария 2-1 Челси</li>
              <li>МЮ 2-2 Реал (ничья)</li>
              <h3 
              className={styles.goalsQuotes}>Счёт голов: 7-13</h3>
            </uL>
            <button
              onClick={onButtonClick4}
              style={{
                marginTop: !isArrowClicked4 ? "0" : "2vw",
              }}
            >
              {buttonText4}
            </button>
          </div>
        </div>

        <div 
        style={{ padding: "2vw 0" }}
        className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >9 октября (ТОВАРНЯК)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 0-5 Рай</h1>
        </div>

        <div 
        style={{ padding: "2vw 0" }}
        className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >29 октября (ТОВАРНЯК)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 0-5 Рай</h1>
        </div>

        <div className={styles.matchDayBlock}>
          <h2
          className={styles.dateText}
          >9 ноября (ОФИЦИАЛЬНАЯ КАТКА)</h2>
          <h1
          className={styles.matchScoreText}
          >Дудка 3-4 Рай</h1>
          <div className={styles.resultList}>
            <h3
            className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked5 ? "35vw" : "0",
                overflow: !isArrowClicked5 ? "visible" : "hidden",
                transition: !isArrowClicked5 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked5 ? "0" : "100vw",
                overflow: !isArrowClicked5 ? "hidden" : "visible",
                transition: !isArrowClicked5 ? "0.7s" : "0.6s",
              }}
            >
              <li>Реал 2-0 ПСЖ</li>
              <li>Бавария 2-2 Ливерпуль (ничья)</li>
              <li>МЮ 2-3 МС</li>
              <li>Атлетико 2-2 МЮ (ничья)</li>
              <li>Наполи 1-5 Реал</li>
              <li>Тоттенхэм 1-2 Барселона (ничья)</li>
              <li>Реал 1-1 Бавария (ничья)</li>
              <li>Бавария 3-2 Челси (ничья)</li>
              <li>Реал 0-4 ПСЖ</li>
              <li>МЮ 3-1 Ливерпуль</li>
              <li>Милан 2-2 Арсенал (ничья)</li>
              <li>МЮ 3-3 МС (ничья)</li>
              <li>Бавария 1-1 ПСЖ (ничья)</li>
              <h3 
              className={styles.goalsQuotes}>Счёт голов: 23-28</h3>
            </uL>
            <button
              onClick={onButtonClick5}
              style={{
                marginTop: !isArrowClicked5 ? "0" : "2vw",
              }}
            >
              {buttonText5}
            </button>
          </div>
        </div>
        


      </div>

      <Footer />
    </div>
  );
}

export default ShedulePage;
