import React from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import styles from "./QuotesPage.module.scss";
import QuotesPagePhoto from "../../assets/img/QuotesPagePhoto.jpg";

function QuotesPage() {
    return (
        <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.quotesHeading}>
          <div className={styles.pagePhotoBlock}>
            <img className={styles.quotesPagePhoto} src={QuotesPagePhoto} alt=""></img>
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Лучшие цитаты Рая и Дудки</h1>
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Единственный способ стать сильнее — играть с более сильным противником.</div>
          <div className={styles.quoteAuthor}>© Константин Рай, 2017-ый год
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Я живу гонками на четверть мили, а на остальное плевать, поскольку эти десять или меньше секунд - я свободен...</div>
          <div className={styles.quoteAuthor}>© Никита Дудка
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Я не боюсь того, кто изучает 10 000 различных ударов. Я боюсь того, кто изучает один удар 10 000 раз.</div>
          <div className={styles.quoteAuthor}>© Константин Рай
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Ты не проиграешь Никите в фифу, если не будешь играть с ним...</div>
          <div className={styles.quoteAuthor}>© Никита Дудка, 2021-ый год
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Чтобы обыграть Никиту Дудку в фифу, нужно играть на 200, на 1000% от своих возможностей - 
          только тогда у тебя появится шанс...</div>
          <div className={styles.quoteAuthor}>© Константин Рай
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Я в мужской красоте не разбираюсь, но знаю, что мужчина должен быть чуть красивее обезьяны.</div>
          <div className={styles.quoteAuthor}>© Никита Дудка
          </div>
        </div>

        <div className={styles.quotesBlock}>
          <div className="">
          Гони или умри...</div>
          <div className={styles.quoteAuthor}>© Никита Дудка
          </div>
        </div>

        
      </div>

      <Footer />
    </div>
    )
}

export default QuotesPage
