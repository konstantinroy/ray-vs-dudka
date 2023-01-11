import React, { useState } from "react";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import styles from "./EnterPage.module.scss";
import { CiUser, CiMail } from "react-icons/ci";
import { AiOutlineUnlock } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

function EnterPage() {
  const [regBtn, setRegByn] = useState(true);
  const [enterBtn, setEnterByn] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [regPasswordInput1, setRegPasswordInput1] = useState("");
  const [regPasswordInput2, setRegPasswordInput2] = useState("");
  const [enterPasswordInput, setEnterPasswordInput] = useState("");
  const [showPass, setShowPass] = useState(false);

  console.log(emailInput);
  console.log(usernameInput);

  const registrButton = () => {
    setRegByn(true);
    setEnterByn(false);
    setRegPasswordInput1('')
    setRegPasswordInput2('')
    setEnterPasswordInput('')
  };
  const enterButton = () => {
    setRegByn(false);
    setEnterByn(true);
    setRegPasswordInput1('')
    setRegPasswordInput2('')
    setEnterPasswordInput('')
  };

  const showPassBtn = () => {
    setShowPass(!showPass);
  };

  const mainRegistrationButton = () => {
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(emailInput)) {
      console.log('Email error')
    } else {
      console.log('Email Success')
    }
    const usernameRe = /[A-Z]/;
    if (!usernameRe.test(usernameInput)) {
      console.log('Username error')
    } else {
      console.log('Username Success')
    }
    const passwordRe = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;;
    if (!passwordRe.test(regPasswordInput1, regPasswordInput2)) {
      console.log('Пароль должен иметь как минимум 6 символов, заглавную букву, цифру и спецсимвол')
    } else {
      console.log('Pass Success')
    }
    if (regPasswordInput1 != regPasswordInput2) {
      console.log('Пароли не совпадают!')
    } else {
      console.log('Пароли совпадают!')
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.mainBlock}>
          <div className={styles.pageIcon}>
            <CiUser />
          </div>
          <div className={styles.registrButton}>
            <button
              className={styles.registrBtn}
              style={
                regBtn
                  ? { backgroundColor: "#d9d9d96e" }
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      color: "#d9d9d96e",
                    }
              }
              onClick={registrButton}
            >
              Регистрация
            </button>
            <button
              className={styles.enterBtn}
              style={
                enterBtn
                  ? { backgroundColor: "#d9d9d96e" }
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      color: "#d9d9d96e",
                    }
              }
              onClick={enterButton}
            >
              Вход
            </button>
          </div>
          {regBtn ? (
            <div className={styles.inputsBlock}>
              <div className={styles.input}>
                <CiMail className={styles.inputIcon} />
                <input
                  name="email"
                  type="text"
                  placeholder="Почта"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <CiUser className={styles.inputIcon} />
                <input
                  name="username"
                  type="text"
                  placeholder="Ник"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <AiOutlineUnlock className={styles.inputIcon} />
                <input
                  name="input"
                  type={!showPass ? "password" : "text"}
                  placeholder="Пароль"
                  value={regPasswordInput1}
                  onChange={(e) => setRegPasswordInput1(e.target.value)}
                />
                {!showPass ? (
                  <FiEye
                    className={styles.passEye}
                    style={
                      !regPasswordInput1
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                    onClick={showPassBtn}
                  />
                ) : (
                  <FiEyeOff
                    className={styles.passEye}
                    onClick={showPassBtn}
                    style={
                      !regPasswordInput1
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                  />
                )}
                {/* {!showPass && regPasswordInput1 ? (
                  <FiEye className={styles.passEye}
                   onClick={showPassBtn} />
                ) : (
                  <FiEyeOff className={styles.passEye} onClick={showPassBtn} />
                )} */}
              </div>
              <div className={styles.input}>
                <AiOutlineUnlock className={styles.inputIcon} />
                <input
                  name="input"
                  type={!showPass && regPasswordInput2 ? "password" : "text"}
                  placeholder="Повторите пароль"
                  value={regPasswordInput2}
                  onChange={(e) => setRegPasswordInput2(e.target.value)}
                />
                {!showPass ? (
                  <FiEye
                    className={styles.passEye}
                    style={
                      !regPasswordInput2
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                    onClick={showPassBtn}
                  />
                ) : (
                  <FiEyeOff
                    className={styles.passEye}
                    onClick={showPassBtn}
                    style={
                      !regPasswordInput2
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                  />
                )}
              </div>
              <div className={styles.personalInfoText}>
                {/* Нажимая на кнопку "ЗАРЕГЕСТРИРОВАТЬСЯ" вы даёте согласие на
                обработку персональных данных */}
              </div>
              <button
                className={styles.inputBtn}
                onClick={mainRegistrationButton}
              >
                ЗАРЕГЕСТРИРОВАТЬСЯ
              </button>
            </div>
          ) : (
            <div className={styles.inputsBlock}>
              <div className={styles.input}>
                <CiUser className={styles.inputIcon} />
                <input
                  name="username"
                  type="text"
                  placeholder="Ник"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                />
              </div>
              <div className={styles.input}>
                <AiOutlineUnlock className={styles.inputIcon} />
                <input
                  name="input"
                  type={!showPass ? "password" : "text"}
                  placeholder="Пароль"
                  secureTextEntry={false}
                  value={enterPasswordInput}
                  onChange={(e) => setEnterPasswordInput(e.target.value)}
                />
                {!showPass ? (
                  <FiEye
                    className={styles.passEye}
                    style={
                      !enterPasswordInput
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                    onClick={showPassBtn}
                  />
                ) : (
                  <FiEyeOff
                    className={styles.passEye}
                    onClick={showPassBtn}
                    style={
                      !enterPasswordInput
                        ? { display: "none" }
                        : {
                            display: "block",
                          }
                    }
                  />
                )}
              </div>
              <div className={styles.rememberMeInput}>
                <input type="checkbox" />
                Запомнить меня
              </div>
              <button className={styles.inputBtn}>ВХОД</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EnterPage;
