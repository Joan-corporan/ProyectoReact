import React from "react";


export const FormularioContHpage = () => {
  return (
    <>
      <div className="qsomosdivH ">
        <div className="divH1 container bagrForCon">
          <p className="animate__animated  animate__tada pformc  ">Ingresa tus datos aqui para recibir todas nuestras ofertas increibles!</p>
          <h5>Formulario de contacto:</h5>
          <div className="divContForm">
            <form className="fomr-dflexC">
              <div className="claswi">
                <label className="labfC" htmlFor="email">Email:</label>
                <input
                className="inpf"
                  type="text"
                  placeholder="email@gmail.com"
                  name="email"
                  id=""
                  required
                />
              </div>
              <div className="claswi">
                <label className="labfC"  htmlFor="telefono">Telefono:</label>
                <input className="inpf" type="number" placeholder="9-87654321" name="telefono" min={12345678} max={999999999} required />
              </div>
              <div className="divBuForCo">
                <button className="BuForCo" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="divH1 container bagrContacF">
          <h4>Ubicación:</h4>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};
