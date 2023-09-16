import "./style.css"

export default function Header(){
    return(
        <>
            <header className="topo">
  <div className="logo">
    <a href="../administrador_home/administrador_home.html">
      <img src="../img/Logo.png" alt="logo" />
    </a>
  </div>
  <div className="pesquisa">
    {/*<i class="fa-solid fa-magnifying-glass" id="lupa"></i>*/}
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </i>
    <input className="campotexto" type="text" placeholder="Pesquisa" />
  </div>
  <div className="ricardo">
    <img src="../img/Ricardo.png" alt="" />
    {/*<p>Ricardo Souza</p>*/}
    <a href="../perfil_administrador/perfil_administrador.html">
      Ricardo Souza
    </a>
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
      >
        {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
      </svg>
    </i>
  </div>
</header>

        </>
    )
}