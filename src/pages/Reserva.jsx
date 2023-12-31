import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
import moment from "moment";

export const Reserva = () => {
    const initialvalue = {
        nombre: "",
        comida: "",
        telefono: "",
        fecha: "",
        hora: "",
        comensales: "",
    };
    const [info, setinfo] = useState(initialvalue);
    const [infoArray, setinfoArray] = useState([]);
    const [editarID, setEditarID] = useState("");

    const infInput = ({ target }) => {
        setinfo({
            ...info,
            [target.name]: target.value,
        });
    };
    const getFoodID = async (id) => {
        const doc = await db.collection("comida").doc(id).get();
        setinfo({
            ...doc.data(),
        });
    };
    const submitInfo = async (e) => {
        e.preventDefault();
        if (
            info.nombre === "" ||
            info.telefono === "" ||
            info.fecha === "" ||
            info.hora === "" ||
            info.comensales === ""
        ) {
            toast("Hay campos vacios", {
                type: "warning",
                autoClose: 3000,
            });
            return;
        }
        try {          
            if (editarID === "") {               
                await db.collection("comida").add(info);
                toast("Informacion creada con exito", {
                    type: "success",
                    autoClose: 3000,
                });
                setinfo(initialvalue);
            }
             else {
                await db.collection("comida").doc(editarID).update(info);
                toast("La informacion se a actualizado", {
                    type: "info",
                    autoClose: 3000,
                });
                setEditarID("");
            }
        } catch (error) {}
    };

    const getFood = async () => {
        db.collection("comida").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setinfoArray(docs);
            
            
        });
    };
    const bEliminar = async (id) => {
        if (!window.confirm("Estas seguro de eliminar este elemento?")) {
            return;
        }
        await db.collection("comida").doc(id).delete();
        toast("La informacion se a eliminado", {
            type: "error",
            autoClose: 3000,
        });
    };

    useEffect(() => {
        getFood();
    }, []);

    useEffect(() => {
        if (editarID === "") {
            setinfo(initialvalue);
        } else {
            getFoodID(editarID);
        }
    }, [editarID]);

    return (
        <>
            <div className="container dispFlCont">
                <form className="contFormR" onSubmit={submitInfo}>
                    <span>Reservar</span>
                    <table className="tableF">
                        <tbody>
                            <tr>
                                <td className="tdR">
                                    <label htmlFor="nombre">Nombre :</label>
                                </td>

                                <td>
                                    <input
                                        type="text"
                                        name="nombre"
                                        id="nombre"
                                        placeholder="Escriba su nombre"
                                        onChange={infInput}
                                        value={info.nombre}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdR">
                                    <label htmlFor="telefono">
                                        Numero de telefono :
                                    </label>
                                </td>
                                <td>
                                    <input
                                        placeholder="987654321"
                                        value={info.telefono}
                                        type="number"
                                        name="telefono"
                                        min={98574637}
                                        max={987654321}
                                        onChange={infInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdR">
                                    <label htmlFor="comensales">
                                        Cantidad de comensales :
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="comensales"
                                        placeholder="2"
                                        min={1}
                                        max={9}
                                        value={info.comensales}
                                        onChange={infInput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdR">
                                    <label htmlFor="fecha">
                                        Indique su fecha :
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="date"
                                        name="fecha"
                                        placeholder=""
                                        value={info.fecha}
                                        onChange={infInput}
                                        min={moment().format("YYYY-MM-DD")}
                                        max={moment()
                                            .add("2", "weeks")
                                            .format("YYYY-MM-DD")}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="tdR">
                                    <label htmlFor="reserva">
                                        Hora de reserva :
                                    </label>
                                </td>
                                <td>
                                    <input
                                        type="time"
                                        name="hora"
                                        onChange={infInput}
                                        value={info.reserva}
                                        placeholder=""
                                    />
                                </td>
                            </tr>                       
                        </tbody>
                        <div className="btonForm">
                            <button type="submit">Reservar</button>
                        </div>
                    </table>
                </form>
                <div className="contaTR container">
                    <table className="tableF2 ">
                        <thead className="theE">
                            <tr >
                                <th>Nombre</th>
                                {/* <th>Comida </th> */}
                                <th>Hora</th>
                                <th>Fecha</th>
                                <th>Comensales</th>
                                <th>Telefono</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {infoArray.map((el) => (
                                <tr className="trE" key={el.id}>
                                    <td className="tdE">{el.nombre}</td>
                                    <td className="tdE">{el.hora}</td>
                                    <td className="tdE">{el.fecha}</td>
                                    <td className="tdE">{el.comensales}</td>
                                    <td className="tdE">{el.telefono}</td>
                                    <td className="tdE tdEMb">
                                        <button
                                            className="butnEd"
                                            onClick={() => setEditarID(el.id)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="butnEl"
                                            onClick={() => bEliminar(el.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
