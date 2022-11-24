import React from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import "./PhotosPage.scss";
import PhotoPagePhoto from "../../assets/img/PhotoPagePhoto.jpg";
import Photo1 from './photo-img/ZIYtf494hZQ.jpg'
import Photo2 from './photo-img/W8QWi2EyVyE.jpg'
import Photo3 from './photo-img/OCicHB5-3jE.jpg'
import Photo4 from './photo-img/67q3tlYFXvw.jpg'
import Photo5 from './photo-img/CFnMgkFhi1g.jpg'
import Photo6 from './photo-img/Mh8vozJ5gG0.jpg'
import Photo7 from './photo-img/imfni1iqzGM.jpg'
import Photo8 from './photo-img/6ApIps7-5XM.jpg'
import Photo9 from './photo-img/m-C6-wyvf0o.jpg'
import Photo10 from './photo-img/92aVFx2Wu00.jpg'
import Photo11 from './photo-img/GGz5hBXkA3Q.jpg'
import Photo12 from './photo-img/xq9N9HmiWOI.jpg'
import Photo13 from './photo-img/u84dUZP5N38.jpg'
import Photo14 from './photo-img/x9z8WwMqZYA.jpg'
import Photo15 from './photo-img/ldrYh2_2-oc.jpg'
import Photo16 from './photo-img/ngi22qGStJQ.jpg'
import Photo17 from './photo-img/id8q0rN3RI0.jpg'
import Photo18 from './photo-img/M3_7BYJ29W8.jpg'
import Photo19 from './photo-img/00yyuuuu.png'
import Photo20 from './photo-img/AUodPLvkf60.jpg'
import Photo21 from './photo-img/nD314Hdp-60.jpg'
import Photo22 from './photo-img/w_YwzsZ77Qc.jpg'
import Photo23 from './photo-img/oyrg2pzDmFY.jpg'
import Photo24 from './photo-img/D5MsUyVHUFs.jpg'
import Photo25 from './photo-img/xVc1RRKtCh4.jpg'
import Photo26 from './photo-img/xVc1RRKtCh4-2.jpg'
import Photo27 from './photo-img/e4r9B7EWQdI.jpg'



function PhotosPage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="photoHeading">
          <div className="pagePhotoBlock">
            <img className="photoPagePhoto" src={PhotoPagePhoto} alt=""></img>
          </div>
          <div className="headingText">
            <h1 className="heading">Лучшие фоточки за всё время</h1>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo1} alt="" /></div>
          <div className="photo-box"><img src={Photo2} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo3} 
          className="oneImg"
          alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo4} className="oneImg" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo5} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo6} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo7} className="oneImg" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo8} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo9} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo10} alt="" /></div>
          <div className="photo-box"><img src={Photo11} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo12} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo13} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo14} alt="" /></div>
          <div className="photo-box"><img src={Photo15} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo16} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo17} alt="" /></div>
          <div className="photo-box"><img src={Photo18} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo19} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo20} alt="" /></div>
          <div className="photo-box"><img src={Photo21} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo22} className="oneImg2" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo23} className="oneImg" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo24} className="oneImg" alt="" />
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <div className="photo-box"><img src={Photo25} alt="" /></div>
          <div className="photo-box"><img src={Photo26} alt="" /></div>
          </div>
        </div>

        <div className="photoBlock">
          <div className="allPhoto-box">
          <img src={Photo27} className="oneImg" alt="" />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default PhotosPage;
