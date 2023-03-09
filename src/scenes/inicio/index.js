import Header from "../../components/Header"

import "./inicio.css"

function Inicio() {
  return (
    <>

      <Header />
      <main>

        <aside class="asideLeft">
          <div>
            <img alt="perfil foto" src="eu.jpg" />

          </div>
        </aside>
        <section class="section-post">

          <section class="container-post">
            <div class="container-publi">
              <img alt="perfil foto" src="eu.jpg" />
              <button>
                <span>Começar publicação</span>
              </button>
            </div>
            <div class="type-posts">

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path fill="#378fe9" d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                </svg>
                Foto
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path fill="#5f9b41" d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                </svg>
                Vídeo

              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path fill="#a872e8" d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                Vaga
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                  <path fill="#e16745" d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                </svg>
                Escrever artigo
              </div>
            </div>
          </section>

          <button class="button-classficar">
            <hr />
            <div>
              <span>Classificar por:</span>
              <span>Recentes</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
              </svg>
            </div>
          </button>

          <section class="posts">

          </section>

        </section>
        <aside class="asideRight">

        </aside>
      </main>

    </>
  );
}

export default Inicio;