import React, { useState } from "react";
import FileUpload from './FileUpload';

export const About = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataFromAPI, setDataFromAPI] = useState(null); // Estado para almacenar los datos de la API

  // Función para realizar la solicitud a la API PERRUNA
  const fetchDataFromAPI = () => {
    fetch("http://localhost:3000/data")
      .then(response => response.json())
      .then(data => setDataFromAPI(data))
      .catch(error => console.error("Error al obtener los datos:", error));
  };

  const refreshPage = () => {
    window.location.reload(); // Reload mai dooo!!
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div> */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Carga & Muestra de Datos</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* </h3><h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
                <div className="mt-3">
                  <FileUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile}/>
                </div>
                <br />
              </div>
              <div className="mt-3">
                {/* Botón para obtener y mostrar los datos */}
                <button onClick={fetchDataFromAPI} className="btn btn-primary">
                  Obtener Datos de API
                </button>&nbsp;&nbsp;
                {/* Botón para cerrar y refrescar los datos */}
                <button onClick={refreshPage} className="btn btn-success ml-2">
                  Cerrar Datos
                </button>
              </div>
              <div> 
                {/* Aquí se muestran los datos obtenidos de la API en tablas */}
                {dataFromAPI && (
                  <div><br />
                    <h3>Datos de Tabla 1</h3>
                    {/* Tabla para tabla1 */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>País</th>
                          <th>Continente</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Mapear los datos de la tabla1 */}
                        {dataFromAPI.tabla1.map((item, index) => (
                          <tr key={index}>
                            <td style={{ textAlign: "left" }}>{item.id}</td>
                            <td style={{ textAlign: "left" }}>{item.paises}</td>
                            <td style={{ textAlign: "left" }}>{item.continente}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Tabla para tabla2 */}
                    <h3>Datos de la Tabla 2</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Cliente</th>
                          <th>Folio</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Mapear los datos de la tabla2 */}
                        {dataFromAPI.tabla2.map((item, index) => (
                          <tr key={index}>
                            <td style={{ textAlign: "left" }}>{item.id}</td>
                            <td style={{ textAlign: "left" }}>{item.cliente}</td>
                            <td style={{ textAlign: "left" }}>{item.folio}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Tabla para tabla3 */}
                    <h3>Datos de la Tabla 3</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>UNIDIM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Mapear los datos de la tabla3 */}
                        {dataFromAPI.tabla3.map((item, index) => (
                          <tr key={index}>
                            <td style={{ textAlign: "left" }}>{item.id}</td>
                            <td style={{ textAlign: "left" }}>{item.UNIDIM}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
