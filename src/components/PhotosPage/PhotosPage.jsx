import React from "react";
import Navbar from "../Main/Header/Navbar";
import Footer from "../Main/Footer/Footer";
import BackToTopButton from './../CommonComponents/BackToTopButton/BackToTopButton.js'
import styles from "./PhotosPage.module.scss";
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
import Photo28 from './photo-img/22Ddolr2x0g.jpg'
import Photo29 from './photo-img/N8y26rEK0iQ.jpg'
import Photo30 from './photo-img/9rXH7Mi-rUw.jpg'
import Photo31 from './photo-img/R1U89zNx5pw.jpg'
import Photo32 from './photo-img/E_I83OEi0Ws.jpg'
import Photo33 from './photo-img/ccgbEp5tqyY.jpg'
import Photo34 from './photo-img/KnWnV8z63u0.jpg'
import Photo35 from './photo-img/wZSjjKuxrSQ.jpg'
import Photo36 from './photo-img/37ZJnqVJUHE.jpg'
import Photo37 from './photo-img/eNpbDe8gvVU.jpg'
import Photo38 from './photo-img/9axxYsATi9E.jpg'
import Photo39 from './photo-img/JnFj-qp1JQQ.jpg'
import Photo40 from './photo-img/zEv-_ygOjz8.jpg'
import Photo41 from './photo-img/IoYQKF9r6DU.jpg'
import Photo42 from './photo-img/ydLm0-8SJEA.jpg'
import Photo43 from './photo-img/kLUKxIpdL5w.jpg'
import Photo44 from './photo-img/7360YNn1mgE.jpg'
import Photo45 from './photo-img/csfcgVBG908.jpg'
import Photo46 from './photo-img/9toev8SqaFs.jpg'
import Photo47 from './photo-img/HiLWaZrX_aA.jpg'
import Photo48 from './photo-img/GoSQUaZrWVU.jpg'
import Photo49 from './photo-img/GGYBboh3Alo.jpg'
import Photo50 from './photo-img/VOAaPUxR0OQ.jpg'
import Photo51 from './photo-img/QKZ37MH2TiA.jpg'
import Photo52 from './photo-img/zyRRa4sARBw.jpg'
import Photo53 from './photo-img/jtasvkIy3k8.jpg'
import Photo54 from './photo-img/WmY2XfqdlKI.jpg'
import Photo55 from './photo-img/ucxspbV1d5Y.jpg'
import Photo56 from './photo-img/photo_2022-02-03_14-24-01.jpg'
import Photo57 from './photo-img/photo_2022-02-03_23-57-27.jpg'
import Photo58 from './photo-img/pLJkZ4vjS_0.jpg'
import Photo59 from './photo-img/IdXZkvX-WHM.jpg'
import Photo60 from './photo-img/zPI1UkMJKjU.jpg'
import Photo61 from './photo-img/eAkeUTqQp_Y.jpg'
import Photo62 from './photo-img/Aq4QHas7r34.jpg'
import Photo63 from './photo-img/rXzNMKt0R0A.jpg'
import Photo64 from './photo-img/Jl3n20SiINk.jpg'
import Photo65 from './photo-img/I2IYlR3AZAE.jpg'
import Photo66 from './photo-img/SSjaereRhOM.jpg'
import Photo67 from './photo-img/awdGjFwxhtc.jpg'
import Photo68 from './photo-img/y16XQd9_uJ4.jpg'
import Photo69 from './photo-img/79cEC0-40BQ.jpg'
import Photo70 from './photo-img/Ndf6nOrpQZ8.jpg'
import Photo73 from './photo-img/AkdIu2SgA70.jpg'
import Photo74 from './photo-img/X08DnwltA_E.jpg'
import Photo75 from './photo-img/KWDEbo_rC5c.jpg'
import Photo76 from './photo-img/photo_2022-12-14_02-28-41.jpg'
import Photo77 from './photo-img/photo_2022-12-14_02-28-41 (2).jpg'




function PhotosPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.photoHeading}>
          <div className={styles.pagePhotoBlock}>
            <img className={styles.photoPagePhoto} src={PhotoPagePhoto} alt=""></img>
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>???????????? ?????????????? ???? ?????? ??????????</h1>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo1} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo2} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo3} 
          className={styles.oneImg}
          alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo4} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo5} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo6} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo7} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo8} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo9} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo10} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo11} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo12} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo13} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo14} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo15} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo16} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo17} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo18} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo19} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo20} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo21} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo22} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo23} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo24} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo25} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo26} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo27} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo28} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo29} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo30} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo31} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo32} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo33} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo34} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo35} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo36} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo37} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo38} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo39} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo40} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo41} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo42} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo43} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo44} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo45} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo46} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo49} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo50} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo51} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo52} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo53} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo54} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo55} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo56} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo57} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo58} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo59} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo60} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo61} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo62} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo63} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo64} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo65} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo66} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo67} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo68} alt="" /></div>
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo69} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo70} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo73} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo74} className={styles.oneImg} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <img src={Photo75} className={styles.oneImg2} alt="" />
          </div>
        </div>

        <div className={styles.photoBlock}>
          <div className={styles['allPhoto-box']}>
          <div className={styles['photo-box']}><img src={Photo76} alt="" /></div>
          <div className={styles['photo-box']}><img src={Photo77} alt="" /></div>
          </div>
        </div>


        <BackToTopButton />
      </div>

      <Footer />
    </div>
  );
}

export default PhotosPage;
