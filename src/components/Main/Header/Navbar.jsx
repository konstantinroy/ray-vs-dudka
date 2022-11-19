import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <div className="pcMenu">
        <div className="logo__block">
        <a href="/main">RayVsDudka</a> 
        </div>
        <div className="wrapper">
          <ul className="PClinks">
            <a href="/shedule">Расписание</a>
            <a href="/shedule">Результаты</a>
            <a href="/locations">Места проведения</a>
            <a href="/">Аудио</a>
            <a href="/">Фоточки</a>
            <a href="/">Цитаты</a>
          </ul>
          <div className="buttons">
            <button className="login-button">LOGIN</button>
            <button className="sign-up-button">SIGN UP</button>
          </div>
        </div>
      </div>

      <div className="mobileMenu">
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className="logo__block"><a href="/main">RayVsDudka</a></div>
        </nav>
        <div className={menu_class}>
          <a href="/shedule">Расписание</a>
          <a href="/shedule">Результаты</a>
          <a href="/locations">Места проведения</a>
          <a href="/">Аудио</a>
          <a href="/">Фоточки</a>
          <a href="/">Цитаты</a>
          <div className="registrButtons">
            <a href="/">LOGIN</a>
            <a href="/">SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
