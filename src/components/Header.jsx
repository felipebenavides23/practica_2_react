import React from 'react';

 import '../assets/styles/components/header.scss'
 import Logo from '../assets/static/logo-platzi-video-BW2.png'
 import userLogo from '../assets/static/user-icon.png'


const header = ()=> (

    <header className="header">
    <img className="header__img" src={Logo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userLogo} />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);

 export default header