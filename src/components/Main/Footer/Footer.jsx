import React, {useState} from "react";
import styles from '../Footer/Footer.module.scss'
import AppStoreIcon from '../../../assets/img/AppStoreIcon.png'
import GooglePlayIcon from '../../../assets/img/GooglePlayIcon.png'

function Footer() {

  const [buttonText, setButtonText] = React.useState('▼');
  const [isArrowClicked, setIsArrowClicked] = useState(false);

    const onButtonClick = () => {
      if(!isArrowClicked) {
        setButtonText('▲');
      } else {
        setButtonText('▼');
      }
      setIsArrowClicked(!isArrowClicked);
    }


    return (
    <div style={{padding: "7vw 7vw 3vw 7vw", backgroundColor: "#222"}} >

      <div className={styles.mainBlockPC}>
        <div className={styles.linksPCBlock}>
          <h1>Компания</h1>
          <ul className={styles.linksPC}>
          <li><a href="/">О нас</a></li>
          <li><a href="/">Блог</a></li>
          <li><a href="/">Карьера</a></li>
          <li><a href="/">Медиа о нас</a></li>
          <li><a href="/">White paper</a></li>
          </ul>
        </div>

        <div className={styles.linksPCBlock}>
          <h1>Поддержка</h1>
          <ul className={styles.linksPC}>
          <li><a href="/">Контакты</a></li>
          <li><a href="/">Партёрская программа</a></li>
          </ul>
        </div>

        <div className={styles.linksPCBlock}>
          <h1>Правила</h1>
          <ul className={styles.linksPC}>
          <li><a href="/">Пользовательские соглашения</a></li>
          <li><a href="/">Политика использования данных</a></li>
          <li><a href="/">Политика cookies</a></li>
          </ul>
        </div>

        <div className={styles.icons}>
        <a href='/'><img src={AppStoreIcon} alt=''></img></a>
        <a href='/'><img src={GooglePlayIcon} alt=''></img></a>
        </div>
      </div>

      <div className={styles.mainBlockMOB}>

      <div className={styles.linksBlockMOB__box}
      >
      <div className={styles.linksBlockMOB}>
        <div className={styles.heading}>
          <h1>Компания</h1>
          <button 
          onClick={onButtonClick} 
          >{buttonText}</button>
        </div>
        <div className={styles.linksMOBBox}>
          <ul className={styles.linksMOB}>
            <li><a href="/">О нас</a></li>
            <li><a href="/">Блог</a></li>
            <li><a href="/">Карьера</a></li>
            <li><a href="/">Медиа о нас</a></li>
            <li><a href="/">White paper</a></li>
          </ul>
          </div>
        </div>
        <div className={styles.icons}>
        <a href='/'><img src={AppStoreIcon} alt=''></img></a>
        <a href='/'><img src={GooglePlayIcon} alt=''></img></a>
        </div>
        </div>

      </div>

      <div className={styles.footerCapText}>© Ray vs Dudka 2022</div>

    </div>
    );
}

export default Footer
