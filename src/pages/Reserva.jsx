import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { toast } from "react-toastify";
import moment from 'moment'

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
    if (info.nombre === "" || info.comida === "") {
      toast("Hay campos vacios", {
        type: "warning",
        autoClose: 3000,
      });
      return;
    }
    try {
      if (editarID === "") {
        await db.collection("comida").add(info);
        console.log(info)
        toast("Informacion creada con exito", {
          type: "success",
          autoClose: 3000,
        });
        setinfo(initialvalue);
      } else {
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
      console.log("obtener datos");
      /*console.log(infoArray)  */
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
      <h2>Reservar</h2>
      <form onSubmit={submitInfo}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Escriba su nombre"
          onChange={infInput}
          value={info.nombre}
        />
        <label htmlFor="telefono">Numero de telefono</label>
        <input
          placeholder="987654321"
          value={info.telefono}
          type="number"
          name="telefono"
          min={900000000}
          max={999999999}
          required
          onChange={infInput}
        />

        <label htmlFor="comensales">Cantidad de comensales</label>
        <input
          type="number"
          name="comensales"
          placeholder="2"
          min={1}
          max={9}
          required
          value={info.comensales}
          onChange={infInput}
        />

        <label htmlFor="fecha">Indique su fecha</label>
        <input
          type="date"
          name="fecha"
          placeholder=""
          value={info.fecha}
          onChange={infInput}
          min= {moment().format('YYYY-MM-DD')}
          max= {moment().add('2','weeks').format('YYYY-MM-DD')}
          required
        />

        <label htmlFor="reserva">Hora de reserva</label>
        <input
          type="time"
          name="hora"
          onChange={infInput}
          value={info.reserva}
          placeholder=""
          required
        />

        <label htmlFor="comida">Comida</label>
        <input
          type="text"
          name="comida"
          id="comida"
          placeholder="Escriba su comida"
          onChange={infInput}
          value={info.comida}
          required
        />
        <button type="submit">Reservar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Comida </th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Comensales</th>
            <th>Telefono</th>

            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {infoArray.map((el) => (
            <tr key={el.id}>
              <td>{el.nombre}</td>
              <td>{el.comida}</td>
              <td>{el.hora}</td>
              <td>{el.fecha}</td>
              <td>{el.comensales}</td>
              <td>{el.telefono}</td>
              <td>
                <button onClick={() => setEditarID(el.id)}>Editar</button>
                <button onClick={() => bEliminar(el.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
