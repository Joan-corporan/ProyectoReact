import React from "react";

export const QsomosHpages = ({nombre }) => {
    return (
        
            <div className="qsomosdivH1 ">
                <div className="divH1 container">
                    
                    <div className="divQimg">
                        <img src="../../public/assets/images/img1H.jpeg" alt="Hamburguesa" />
                    </div>
                </div>

                <div className="divH1  container ">
                    <span>SOBRE NOSOTROS </span>
                    <div className="box">
                        
                        <p>
                            {nombre} es una empresa gastronómica familiar,
                            contamos con una larga trayectoria, más de 27 años
                            compartiendo nuestros platos, nunca nos atrevimos a
                            expander este gran Don hasta el día de hoy.
                            Trabajando siempre con los mejores ingredientes,
                            materias prima y nuestro más preciado secreto, el
                            mantener las recetas tradicionales de {nombre}
                            para crear y llevar a la mesa los mejores sabores.
                            {nombre} es producto de platos y recetas pasado
                            de generación en generación, conservando siempre la
                            su buen sabor. Todos los productos son elaborados
                            con la más alta tecnología en nuestra planta y con
                            personal altamente calificado y dedicado, donde
                            nacen todos los platos que nuestra variada carta
                            ofrece. El proceso de elaboración de nuestros
                            sándwiches y pizzas es riguroso, desde la selección
                            de las materias primas, el proceso de cocción y un
                            exigente control sanitario y de calidad, que
                            aseguran una excelente preparación. Todos nuestros
                            locales, distribuidos a lo largo de la región
                            metropolitana, son un elemento más del conjunto de
                            atributos que hace a {nombre} tan especial, con
                            una clientela fiel que ha traspasado generaciones,
                            porque en cada uno de nuestros locales encuentran la
                            magia para compartir con familia y amigos, teniendo
                            una experiencia única.
                        </p>
                        
                    </div>
                </div>
            </div>
        
    );
};
