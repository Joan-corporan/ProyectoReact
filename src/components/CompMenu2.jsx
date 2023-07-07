import React from "react";

export const CompMenu2 = () => {
    return (
        <>
            <div className="container prueba">
                <div className="container divMen">
                    <article className="Logm">
                        <h1>
                            <p>Restaurante C&B</p>
                        </h1>
                        <span className="Log">Menú</span>
                    </article>
                    <div className="divCmc container">
                        <div className="menuCont">
                            
                            <img src="../../public/assets/images/imgMenu1.jpeg" alt="imagen de hamburguesa" />
                        </div>
                        <div className="menuCont">
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
                    <div className="divCmc container">
                        <section className="menuCont">
                            
                            <img src="../../public/assets/images/imagMenu2.jpeg" alt="" />
                        </section>
                        <section className="menuCont">
                            <h2>Sandwich</h2>
                            <ul>
                                <li>Vegetariano</li>
                                <li>Aceitunas</li>
                                <li>Doble carne</li>
                                <li>Carne con ají </li>
                                <li>Pollo y queso</li>
                            </ul>
                        </section>
                    </div>
                    <div className="divCmc container">
                        <section className="menuCont">
                            
                            <img src="../../public/assets/images/imgMenu3.jpeg" alt="" />
                        </section>

                        <section className="menuCont">
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
                    <div className="divCmc container">
                        <section className="menuCont">
                           
                            <img src="../../public/assets/images/imgMenu4.jpeg" alt="" />
                        </section>
                        <section className="menuCont">
                            <h2>Bebidas</h2>
                            <ul>
                                <li>Agua mineral</li>
                                <li>Agua con gas</li>
                                <li>Jugos Naturales</li>
                                <li>Coca cola</li>
                                <li>Cervezas</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};
