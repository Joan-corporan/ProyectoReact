import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/firebase";

/* const AnyReactComponent = ({ text }) => <div>{text}</div>; */

export const FormularioContHpage = () => {
    const valorinicial = {
        email: "",
        telefono: "",
    };
    const [contact, setContact] = useState(valorinicial);

    const handleinfoC = ({ target }) => {
        setContact({
            ...contact,
            [target.name]: target.value,
        });
        console.log(contact);
    };
    const setInformacion = async (e) => {
        e.preventDefault();
        console.log(contact);
        if (contact.email === "" || contact.telefono === "") {
            toast("Hay campos vacios", {
                type: "warning",
                autoClose: 3000,
            });
        }

        await db.collection("contactopersona").add(contact);
        toast("La informacion se envio con exito", {
            type: "success",
            autoClose: 3000,
        });
        setContact(valorinicial);
    };

    return (
        <>
            <div className="qsomosdivH ">
                <div className="divH1 container bagrForCon">
                    <p className="animate__animated  animate__tada pformc  ">
                        Ingresa tus datos aqui para recibir todas nuestras
                        ofertas increibles!
                    </p>
                    <h5>Formulario de contacto:</h5>
                    <div className="divContForm">
                        <form className="fomr-dflexC" onSubmit={setInformacion}>
                            <div className="claswi">
                                <label className="labfC" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="inpf"
                                    type="text"
                                    placeholder="email@gmail.com"
                                    name="email"
                                    onChange={handleinfoC}
                                />
                            </div>
                            <div className="claswi">
                                <label className="labfC" htmlFor="telefono">
                                    Telefono:
                                </label>
                                <input
                                    className="inpf"
                                    type="number"
                                    placeholder="9-87654321"
                                    name="telefono"
                                    min={12345678}
                                    max={999999999}
                                    onChange={handleinfoC}
                                />
                            </div>
                            <div className="divBuForCo">
                                <button className="BuForCo" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="divH1 container bagrContacF">
                    <h4>Ubicación:</h4>
                    <div className="divUbi">
                        <a href="https://goo.gl/maps/XWjYc859CgYSg34s6"><img src="../../public/assets/images/img-pages/ubiccionHp.png" alt="ubicacion" /></a>
                       
                    </div>
                </div>
            </div>
        </>
    );
};
