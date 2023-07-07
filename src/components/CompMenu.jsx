import React from "react";

export const CompMenu = () => {
    return (
        
            <div className="container divnone ">
                <div className="container divMenu">
                    <article className="Logmenu">
                    <h1>
                        <p>Restaurant C&B</p>
                    </h1>
                    <span className="Logmen" >Menú</span>

                    </article>
                    <div className="divCmc1 container">
                        <div className="menuCont1">
                        <img src="../../public/assets/images/img-pages/imgMenu1.jpeg" alt="imagen de hamburguesa" />
                        </div>
                        <div className="menuCont1">
                            <h2>Hamburguesas</h2>
                            <ul>
                                <li>Mediana</li>
                                <li>Grande</li>
                                <li>Doble carne</li>
                                <li>4 queso</li>
                                <li>Jamón</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divCmc1 container">
                        <section className="menuCont1">
                            <h2>Sandwich</h2>
                            <ul>
                                <li>Vegetariano</li>
                                <li>Aceitunas</li>
                                <li>Doble carne</li>
                                <li>Carne con ají </li>
                                <li>Pollo y queso</li>
                            </ul>
                        </section>
                        <section className="menuCont1">
                            
                         <img src="../../public/assets/images/img-pages/imagMenu2.jpeg" alt="Imagen de Sandwich" />
                        </section>
                    </div>
                    <div className="divCmc1 container">
                        <section className="menuCont1">
                            
                            <img src="../../public/assets/images/img-pages/imgMenu3.jpeg" alt="Imagen de Pizza" />
                        </section>

                        <section className="menuCont1">
                            <h2>Pizzas</h2>
                            <ul>
                                <li>Napolitana</li>
                                <li>Jamon y queso</li>
                                <li>Pepperoni</li>
                                <li>La Diabla</li>
                                <li>Jamon, alcachofa, choclo </li>
                            </ul>
                        </section>
                    </div>
                    <div className="divCmc1 container">
                        <section className="menuCont1">
                            <h2>Bebidas</h2>
                            <ul>
                                <li>Agua mineral</li>
                                <li>Agua con gas</li>
                                <li>Jugos Naturales</li>
                                <li>Coca cola</li>
                                <li>Cervezas</li>
                            </ul>
                        </section>

                        <section className="menuCont1">
                            
                            <img src="../../public/assets/images/img-pages/imgMenu4.jpeg" alt="Imagen de Bebidas" />
                        </section>
                    </div>
                </div>
            </div>
        
    );
};
