import React from "react";


export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          <img src={process.env.PUBLIC_URL + 'https://www.rimac.com.mx/images/logo.1676267304.png'} alt="" 
            style={{ maxWidth: "200px", width: "100%", height: "auto" }}/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Proceso
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Carga & Muestra de Datos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
