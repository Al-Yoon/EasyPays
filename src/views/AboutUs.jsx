import React from "react";
import Ale from "../components/Assets/alex.png";
import Santi from "../components/Assets/santi.png";
import Fede from "../components/Assets/fede.png";
import AboutImg from "../components/Assets/1265650.jpg"

const Nosotros = () =>{
return(
    <div>
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
            <p className="text-[#38bdf8] mx-auto font-bold md:text-6xl sm:text-2xl text-xl pt-2">Bienvenido a Easy Pays</p>
                <h1 className="md:text-1xl sm:text-3xl text-4xl font-bold md:py-6 text-white">
                Más de nosotros</h1>
        </div> 
        <div className="w-full bg-white text-black py-16 px-4">
            <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[1000px] mx-auto h-[65vh] " src={AboutImg} alt="/"></img>
                        <div className=" flex flex-col pl-4 justify-center shadow-2xl">
                            <p className="text-[#38bdf8] md:text-1xl sm:text-3xl text-2xl font-bold text-center mt-5">Sobre nosotros</p>
                                <h1 className="text-black md:text-1xl sm:text-6xl text-4xl font-bold md:py-3 text-center">Conócenos mejor</h1>
                                    <div className=" text-center rounded-xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5 ">
                                    <p>
                                        En <span className="text-[#38bdf8] font-bold">EasyPays</span> creemos que dividir los gastos no debería sentirse como un examen de matemáticas.
                                    </p> 
                                    <p className="mt-8">
                                        Desarrollamos una aplicación web que te permite cargar tus tickets y, con un par de clics, calcula automáticamente la contribución de cada integrante de tu grupo. Ya sea para ese viaje inolvidable (y la cuenta que nadie quiere dividir),
                                        una cena con amigos, o cualquier gasto compartido, nuestra app se encarga de los números para que tú no tengas que hacerlo.
                                    </p>
                                    <p className="mt-8">
                                        Sabemos que lo último que quieres después de una salida en grupo es pelear con las cuentas, 
                                        creamos una solución que convierte la pesadilla de dividir gastos en una tarea rápida, sencilla y, lo mejor de todo, sin dramas.
                                    </p>
                                </div>
                        </div>
                </div>
        </div>
        
        <div className='w-full py-16 text-white px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1'>
                ¿Querés saber quiénes somos?
            </h1>
            <p className="md:text-1xl sm:text-1xl text-xl font-bold">En EasyPays</p>
            </div>
            </div>
        </div>

        <div className="w-full py-[10rem] bg-white px-4 text-black">
            <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">TEAM</p>
            <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Integrantes</h1>
            <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">

                <div className="shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center">
                    <img className='h-auto w-auto my-auto mx-auto' src={Fede} alt="/"/>
                        <h2 className='text-2xl font-bold text-center py-8 '>Developer</h2>
                            <p className='text-center text-[#38bdf8] text-4xl font-bold'>Federico Prieto</p>
                </div>

                <div className='shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center'>
                    <img className='h-auto w-auto my-auto mx-auto' src={Ale} alt="/" />
                        <h2 className='text-2xl font-bold text-center py-8'>Developer</h2>
                            <p className='text-center text-[#38bdf8] text-4xl font-bold'>Alex Yoon</p>
                </div>
            
                <div className='shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center'>
                        <img className='h-auto w-auto my-auto mx-auto' src={Santi} alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Developer</h2>
                                <p className='text-center text-[#38bdf8] text-4xl font-bold'>Santiago Boher</p>
                </div>
            </div>    
        </div>
            <div className="w-full bg-white text-black py-16 px-4">
                <div className="max-w[1240px] mx-auto gap-5 grid md:grid-auto">
                            <div className="pl-4 mx-auto justify-center w-3/4">
                                    <h1 className="text-[#38bdf8] md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center"> ¿Por qué creamos esta aplicación?</h1>
                                        <div className="shadow-2xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5 text-center">
                                        <p>
                                            En EasyPays, creemos que la vida es demasiado corta para estar lidiando con complicados cálculos de gastos compartidos. Nuestro 
                                            "por qué" es sencillo: queremos que las finanzas grupales sean fáciles, transparentes y sin estrés. 
                                            Sabemos que las mejores experiencias se disfrutan en compañía, pero cuando llega la hora de dividir la cuenta, 
                                            todo se complica. Nos propusimos cambiar eso. Nuestra motivación es ayudar a las personas a disfrutar de esos momentos 
                                            sin que el dinero se convierta en un obstáculo.
                                        </p>
                                    </div>
                            </div>
                            <hr></hr>
                            <div className="px-4 mx-auto justify-center w-3/4 mt-5 ">
                                    <h1 className="text-[#38bdf8] md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center">Misión</h1>
                                        <div className="shadow-2xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5 text-center">
                                        <p>
                                            Nuestra misión es eliminar el caos y la incomodidad de los gastos compartidos, brindando una herramienta intuitiva que facilite la vida de las personas. 
                                            Queremos que nuestros usuarios puedan cargar sus tickets de compra y ver, con un simple clic, cómo se divide la cuenta entre todos. 
                                            De esta manera, estamos haciendo que la gestión financiera en grupo sea rápida, eficiente y justa para todos.
                                        </p>
                                    </div>
                            </div>
                            <hr></hr>
                            <div className="pl-4 mx-auto justify-center w-3/4">
                                    <h1 className="text-[#38bdf8] md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center">Visión</h1>
                                        <div className="shadow-2xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5 text-center">
                                        <p>
                                            Nuestra visión es convertirnos en la plataforma de referencia para cualquier situación en la que se necesite dividir gastos. 
                                            Imaginamos un futuro donde nadie se preocupe por cálculos manuales ni malentendidos financieros en grupo. 
                                            Queremos que en cualquier rincón del mundo, ya sea una reunión de amigos, una salida familiar o un viaje de negocios, 
                                            nuestra solución sea el aliado perfecto para una gestión de gastos impecable y sin complicaciones.
                                        </p>
                                    </div>
                            </div>
                    </div>
            </div>
            
    </div>
);
}

export default Nosotros;