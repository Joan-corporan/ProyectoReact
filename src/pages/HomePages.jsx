import React from "react";
import { QsomosHpages } from "../components/QsomosHpages";
import { FormularioContHpage } from "../components/FormularioContHpage";


export const HomePages = ({nombre}) => {


  

  return (
    <>
      <QsomosHpages nombre={nombre}   />
      <FormularioContHpage/>
    </>
  );
};
