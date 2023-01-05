import React, { useState } from "react";
import Navbar from "../../Main/Header/Navbar.jsx";
import Footer from "../../Main/Footer/Footer";
import SeasonTable from './SeasonTable2022/SeasonTable2022'
import styles from "./Result2022Year.module.scss";

function Result2022Year() {
  const [buttonText1, setButtonText1] = React.useState("ᐯ");
  const [buttonText2, setButtonText2] = React.useState("ᐯ");
  const [buttonText3, setButtonText3] = React.useState("ᐯ");
  const [buttonText4, setButtonText4] = React.useState("ᐯ");
  const [buttonText5, setButtonText5] = React.useState("ᐯ");
  const [buttonText6, setButtonText6] = React.useState("ᐯ");
  const [buttonText7, setButtonText7] = React.useState("ᐯ");
  const [buttonText8, setButtonText8] = React.useState("ᐯ");
  const [buttonText9, setButtonText9] = React.useState("ᐯ");

  const [isArrowClicked1, setIsArrowClicked1] = useState(false);
  const [isArrowClicked2, setIsArrowClicked2] = useState(false);
  const [isArrowClicked3, setIsArrowClicked3] = useState(false);
  const [isArrowClicked4, setIsArrowClicked4] = useState(false);
  const [isArrowClicked5, setIsArrowClicked5] = useState(false);
  const [isArrowClicked6, setIsArrowClicked6] = useState(false);
  const [isArrowClicked7, setIsArrowClicked7] = useState(false);
  const [isArrowClicked8, setIsArrowClicked8] = useState(false);
  const [isArrowClicked9, setIsArrowClicked9] = useState(false);

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
  const onButtonClick6 = () => (
    !isArrowClicked6 ? setButtonText6("ᐱ") : setButtonText6("ᐯ"),
    setIsArrowClicked6(!isArrowClicked6)
  );
  const onButtonClick7 = () => (
    !isArrowClicked7 ? setButtonText7("ᐱ") : setButtonText7("ᐯ"),
    setIsArrowClicked7(!isArrowClicked7)
  );
  const onButtonClick8 = () => (
    !isArrowClicked8 ? setButtonText8("ᐱ") : setButtonText8("ᐯ"),
    setIsArrowClicked8(!isArrowClicked8)
  );
  const onButtonClick9 = () => (
    !isArrowClicked9 ? setButtonText9("ᐱ") : setButtonText9("ᐯ"),
    setIsArrowClicked9(!isArrowClicked9)
  );

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.sheduleHeading}>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Итоги сезона 2022 года</h1>
          </div>
        </div>

        <div className={styles.winnerBlock}>
          <h1>Константин Рай победитель сезона 2022!</h1>
        </div>
        
        <div className={styles.seasonTableBlock}>
        <h1>Итоговая таблица</h1>
        <SeasonTable />
        </div>

        <div className={styles.resultsHeader}>
          <h1>Результаты всех туров сезона</h1>
        </div>
        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>25-ое февраля (1 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 3-6 Рай</h1>
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
              <h3 className={styles.goalsQuotes}>Счёт голов: 18-24</h3>
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
          <h2 className={styles.dateText}>12 марта (2 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 3-1 Рай</h1>
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
              <h3 className={styles.goalsQuotes}>Счёт голов: 18-13</h3>
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
          <h2 className={styles.dateText}>10 апреля (3 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 3-4 Рай</h1>
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
              <h3 className={styles.goalsQuotes}>Счёт голов: 10-12</h3>
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
          <h2 className={styles.dateText}>20 мая (4 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 2-2 Рай</h1>
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
              <h3 className={styles.goalsQuotes}>Счёт голов: 7-13</h3>
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

        <div style={{ padding: "2vw 0" }} className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>9 октября (ТОВАРНЯК)</h2>
          <h1 className={styles.matchScoreText}>Дудка 0-5 Рай</h1>
        </div>

        <div style={{ padding: "2vw 0" }} className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>29 октября (ТОВАРНЯК)</h2>
          <h1 className={styles.matchScoreText}>Дудка 0-5 Рай</h1>
        </div>

        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>9 ноября (5 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 3-4 Рай</h1>
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
              <li>Тоттенхэм 1-2 Барселона</li>
              <li>Реал 1-1 Бавария (ничья)</li>
              <li>Бавария 3-2 Челси</li>
              <li>Реал 0-4 ПСЖ</li>
              <li>МЮ 3-1 Ливерпуль</li>
              <li>Милан 2-2 Арсенал (ничья)</li>
              <li>МЮ 3-3 МС (ничья)</li>
              <li>Бавария 1-1 ПСЖ (ничья)</li>
              <h3 className={styles.goalsQuotes}>Счёт голов: 23-28</h3>
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

        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>16 ноября (6 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 5-11 Рай</h1>
          <div className={styles.resultList}>
            <h3
              className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked6 ? "35vw" : "0",
                overflow: !isArrowClicked6 ? "visible" : "hidden",
                transition: !isArrowClicked6 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked6 ? "0" : "170vw",
                overflow: !isArrowClicked6 ? "hidden" : "visible",
                transition: !isArrowClicked6 ? "0.7s" : "0.6s",
              }}
            >
              <li>Бавария 2-4 ПСЖ</li>
              <li>МЮ 1-2 Реал</li>
              <li>Реал 3-1 МЮ</li>
              <li>Ювентус 1-1 МС (ничья)</li>
              <li>Бавария 0-8 Бавария</li>
              <li>Португалия 1-1 Франция (ничья)</li>
              <li>Атлетико 2-3 Ливерпуль</li>
              <li>Реал 2-3 Тоттенхэм</li>
              <li>Интер 3-2 Лестер</li>
              <li>ПСЖ 3-1 Ювентус</li>
              <li>Реал 1-1 Бавария (ничья)</li>
              <li>Реал 3-3 Бавария (ничья)</li>
              <li>МЮ 2-3 ПСЖ</li>
              <li>Челси 5-2 Ливерпуль</li>
              <li>Милан 3-5 МС</li>
              <li>Бельгия 3-5 Португалия</li>
              <li>ПСЖ 0-3 МЮ</li>
              <li>Бавария 0-4 Тоттенхэм</li>
              <li>Челси 3-2 Арсенал</li>
              <li>Реал 3-4 ПСЖ</li>
              <h3 className={styles.goalsQuotes}>Счёт голов: 41-60</h3>
            </uL>
            <button
              onClick={onButtonClick6}
              style={{
                marginTop: !isArrowClicked6 ? "0" : "2vw",
              }}
            >
              {buttonText6}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>29 ноября (7 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 3-6 Рай</h1>
          <div className={styles.resultList}>
            <h3
              className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked7 ? "35vw" : "0",
                overflow: !isArrowClicked7 ? "visible" : "hidden",
                transition: !isArrowClicked7 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked7 ? "0" : "170vw",
                overflow: !isArrowClicked7 ? "hidden" : "visible",
                transition: !isArrowClicked7 ? "0.7s" : "0.6s",
              }}
            >
              <li>Реал 5-3 ПСЖ</li>
              <li>Челси 3-3 МС (ничья)</li>
              <li>Ювентус 1-3 Бавария</li>
              <li>МЮ 2-1 Барселона</li>
              <li>Бавария 1-1 Реал (ничья)</li>
              <li>ПСЖ 2-1 МЮ</li>
              <li>Милан 0-2 Ливерпуль</li>
              <li>Атлетико 4-4 Тоттенхэм (ничья)</li>
              <li>Испания 1-2 Франция</li>
              <li>Интер 2-3 Арсенал</li>
              <li>Ливерпуль 1-4 Атлетико</li>
              <li>Наполи 2-2 Интер (ничья)</li>
              <li>Реал 2-6 ПСЖ</li>
              <h3 className={styles.goalsQuotes}>Счёт голов: 26-35</h3>
            </uL>
            <button
              onClick={onButtonClick7}
              style={{
                marginTop: !isArrowClicked7 ? "0" : "2vw",
              }}
            >
              {buttonText7}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>7 декабря (8 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 5-7 Рай</h1>
          <div className={styles.resultList}>
            <h3
              className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked8 ? "35vw" : "0",
                overflow: !isArrowClicked8 ? "visible" : "hidden",
                transition: !isArrowClicked8 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked8 ? "0" : "170vw",
                overflow: !isArrowClicked8 ? "hidden" : "visible",
                transition: !isArrowClicked8 ? "0.7s" : "0.6s",
              }}
            >
              <li>ПСЖ 2-0 Бавария</li>
              <li>Реал 3-3 ПСЖ (ничья)</li>
              <li>Барселона 1-1 МЮ (ничья)</li>
              <li>Бавария 3-1 Тоттенхэм</li>
              <li>Атлетико 1-0 Реал</li>
              <li>Челси 2-2 Ман Сити (ничья)</li>
              <li>МЮ 2-3 Барселона</li>
              <li>Аргентина 1-4 Англия</li>
              <li>Милан 2-3 Ливерпуль</li>
              <li>Ювентус 1-5 Атлетико</li>
              <li>Реал 1-0 ПСЖ</li>
              <li>Реал 1-4 Бавария</li>
              <li>Челси 2-2 Арсенал (ничья)</li>
              <li>Испания 3-2 Франция</li>
              <li>Бавария 2-4 Тоттенхэм</li>
              <li>Реал 1-1 Барселона (ничья)</li>
              <li>МЮ 2-4 МС</li>
              <h3 className={styles.goalsQuotes}>Счёт голов: 30-39</h3>
            </uL>
            <button
              onClick={onButtonClick8}
              style={{
                marginTop: !isArrowClicked8 ? "0" : "2vw",
              }}
            >
              {buttonText8}
            </button>
          </div>
        </div>

        <div className={styles.matchDayBlock}>
          <h2 className={styles.dateText}>27 декабря (9 ТУР)</h2>
          <h1 className={styles.matchScoreText}>Дудка 9-5 Рай</h1>
          <div className={styles.resultList}>
            <h3
              className={styles.viewResults}
              style={{
                maxHeight: !isArrowClicked9 ? "35vw" : "0",
                overflow: !isArrowClicked9 ? "visible" : "hidden",
                transition: !isArrowClicked9 ? "0.2s" : "0s",
              }}
            >
              Посмотреть результаты матчей
            </h3>
            <uL
              style={{
                maxHeight: !isArrowClicked9 ? "0" : "170vw",
                overflow: !isArrowClicked9 ? "hidden" : "visible",
                transition: !isArrowClicked9 ? "0.7s" : "0.6s",
              }}
            >
              <li>Реал 0-2 ПСЖ</li>
              <li>ПСЖ 4-3 Тоттенхэм</li>
              <li>МЮ 3-1 МС</li>
              <li>Челси 0-5 Бавария</li>
              <li>Бавария 5-1 Реал</li>
              <li>Барселона 3-4 Ливерпуль</li>
              <li>Италия 2-3 Франция</li>
              <li>ЦСКА 2-1 МЮ</li>
              <li>Бенфика 0-5 Лестер</li>
              <li>Атлетико 2-1 Барселона</li>
              <li>Реал 5-3 ПСЖ</li>
              <li>Реал 1-0 ПСЖ</li>
              <li>ПСЖ 4-3 Бавария</li>
              <li>Бавария 6-1 Тоттенхэм</li>
              <h3 className={styles.goalsQuotes}>Счёт голов: 37-33</h3>
            </uL>
            <button
              onClick={onButtonClick9}
              style={{
                marginTop: !isArrowClicked9 ? "0" : "2vw",
              }}
            >
              {buttonText9}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Result2022Year;
