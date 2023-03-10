import "./header.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom"





function Header() {

    const [borderColor, setBorderBottomColor] = useState();
    const [borderWidth, setBorderBottomWidth] = useState();
    const [borderStyle, setBorderBottomStyle] = useState();
   
  
    const handleClick = (linkNumber) => {
      

        setBorderBottomColor(linkNumber);
        setBorderBottomWidth(linkNumber);
        setBorderBottomStyle(linkNumber);
    
    }
  
    return (
        <header>
            <div class="container-nav">
                <div class="div-logo-search">
                    <a>
                        <div>
                            <img alt="perfil foto" src="iconelinkedin.png" />
                        </div>
                    </a>
                    <div class="search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
</svg>
                        <input class="input-search" type="text" value="Pesquisar" />
                    </div>

                </div>
                <nav class="nav-bar">
                    <ul>

                        <li style={{ 
                            borderBottomColor: borderColor === 1 ? 'black' : '',
                             borderBottomWidth: borderWidth === 1 ? '2px' : '',
                              borderBottomStyle: borderStyle ===1 ? 'solid' : ''
                              }} onClick={()=>handleClick(1)}  class="links" >
                            <Link  to="/" class="ancora">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                                </svg>

                                Início

                            </Link>
                        </li>
                        <li style={{ 
                            borderBottomColor: borderColor === 2 ? 'black' : '',
                             borderBottomWidth: borderWidth === 2 ? '2px' : '',
                              borderBottomStyle: borderStyle === 2 ? 'solid' : ''
                              }} onClick={()=>handleClick(2)}  class="links">
                            <Link to="/MinhaRede" class="ancora">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                                </svg>
                                Minha Rede
                            </Link>
                        </li>
                        <li style={{ borderBottomColor: borderColor, borderBottomWidth: borderWidth, borderBottomStyle: borderStyle}} onClick={handleClick}  class="links">
                            <Link class="ancora">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                                </svg>
                                Vagas
                            </Link>
                        </li>
                        <li style={{ borderBottomColor: borderColor, borderBottomWidth: borderWidth, borderBottomStyle: borderStyle}} onClick={handleClick}  class="links">
                            <Link class="ancora">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                                </svg>
                                Mensagens
                            </Link>
                        </li>
                        <li style={{ borderBottomColor: borderColor, borderBottomWidth: borderWidth, borderBottomStyle: borderStyle}} onClick={handleClick}  class="links">
                            <Link class="ancora">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                                </svg>
                                Notificações
                            </Link>
                        </li>
                        <li class="links">
                            <Link class="ancora">
                                <img src="eu.jpg" />
                                <div class="me">
                                Eu
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                            </svg>
                            <div class="solucao">
                                Soluções
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                        </li>
                        <li class="promo"><a>Reative o Premium</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;