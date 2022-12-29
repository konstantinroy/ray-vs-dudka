import React from 'react'
import Navbar from "./Header/Navbar.jsx";
import MainPhoto from "./MainPhoto/MainPhoto.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Results from "./Results/Results.jsx";
import Locations from "./Locations/Locations.jsx";
import Audio from "./Audio/Audio.jsx";
import Photos from "./Photos/Photos.jsx";
import Quotes from "./Quotes/Quotes.jsx";
import Footer from "./Footer/Footer.jsx";

let pageQuestion = prompt("Кто выиграл чемпионат по фифе 2022 года?");

switch (pageQuestion) {
  case "Рай":
  case "рай":
  case "Костя":
  case "костя":
    case "Константин Рай":
      case "константин рай":
        case "Костя Рай":
        case "костя рай":
    alert("Правильно! Костя Рай победитель сезона 2022");
    break;
  default:
    alert("Нет! Сезон выиграл Рай!");
    break;
}

function Main() {
    return (
      <div>
        <Navbar />
        <MainPhoto />
        <Schedule />
        <Results />
        <Locations />
        <Audio />
        <Photos />
        <Quotes />
        <Footer />
      </div>
    );
}

export default Main
