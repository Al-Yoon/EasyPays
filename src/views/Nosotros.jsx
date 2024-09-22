import React from "react";
import Dolar from "../components/Assets/Dolar.jpg";
import Fede from "../components/Assets/Fede.webp";
import Ale from "../components/Assets/ale.jpg";
import Santi from "../components/Assets/santi.avif";


const Nosotros = () =>{
    return(
        <div>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
                <p className="text-[#38bdf8] mx-auto font-bold md:text-6xl sm:text-2xl text-xl pt-2">Bienvenido a Easy Pays</p>
                    <h1 className="md:text-1xl sm:text-3xl text-4xl font-bold md:py-6 text-white">
                    Para saber mas de nosotros</h1>
            </div> 
            <div className="w-full bg-white text-black py-16 px-4">
                <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[1000px] mx-auto " src={Dolar} alt="/"></img>
                            <div className="flex flex-col pl-4 justify-center">
                                <p className="text-[#38bdf8] md:text-1xl sm:text-3xl text-2xl font-bold text-center">Sobre nosotros</p>
                                    <h1 className="text-black md:text-1xl sm:text-6xl text-4xl font-bold md:py-3 text-center"> Somos la mejor aplicacion de todo el mundo</h1>
                                        <div className="bg-gray-300 rounded-xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5">
                                        <p>
                                            En EasyPays, creemos que dividir los gastos no debería sentirse como un examen de matemáticas. 
                                            Nuestra misión es simple: hacer que gestionar tus tickets de compra y calcular quién debe qué sea tan fácil como subir una foto.
                                            Desarrollamos una aplicación web que te permite cargar tus tickets y, con un par de clics, calcula automáticamente la contribución de cada integrante de tu grupo. Ya sea para ese viaje inolvidable (y la cuenta que nadie quiere dividir),
                                            una cena con amigos, o cualquier gasto compartido, nuestra app se encarga de los números para que tú no tengas que hacerlo.
                                            Porque sabemos que lo último que quieres después de una salida en grupo es pelear con las cuentas, 
                                            creamos una solución que convierte la pesadilla de dividir gastos en una tarea rápida, sencilla y, lo mejor de todo, sin dramas.
                                            En EasyPays, nos tomamos tu tranquilidad muy en serio, aunque con un toque de humor. Después de todo, el dinero no debe ser motivo de tensiones, sino de soluciones. 
                                            Así que, si estás listo para olvidarte de los cálculos complicados, únete a nosotros y deja que nuestra app haga el trabajo sucio por ti.</p>
                                    </div>
                            </div>
                    </div>
            </div>
            
            <div className='w-full py-16 text-white px-4 bg-black'>
             <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
             <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-1'>
                    ¿Queres saber quienes somos?
                </h1>
                <p className="md:text-1xl sm:text-1xl text-xl font-bold">En EasyPays</p>
                </div>
             </div>
            </div>

            <div className="w-full py-[10rem] bg-white px-4 text-black">
             <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">TEAM MAKER</p>
              <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">¿Quienes somos? </h1>
                <div className="max-w-auto mx-auto grid md:grid-cols-3 gap-8 pl-5 pr-5">

                    <div className="w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center">
                        <img className='w-50 mx-auto mt-auto' src={Fede} alt="/"/>
                            <h2 className='text-2xl font-bold text-center py-8 '>Founder</h2>
                                <p className='text-center text-[#38bdf8] text-4xl font-bold'>Federico Prieto</p>
                                    <div className='text-center font-medium'>
                                        <p className='py-2 my-5'>
                                        Alias: mejor RAppero del mundo</p>
                                    </div>
                    </div>

                    <div className='w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center'>
                        <img className='w-50 mx-auto mt-auto bg-transparent' src={Ale} alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Founder</h2>
                                <p className='text-center text-[#38bdf8] text-4xl font-bold'>Alex Yoon</p>
                                    <div className='text-center font-medium'>
                                        <p className='py-2 my-5'>
                                        Alias: Pro Desiner</p>
                                    </div>
                    </div>
                
                    <div className='w-[20] shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg items-center'>
                            <img className='w-50 mx-auto mt-auto bg-transparent' src={Santi} alt="/" />
                                <h2 className='text-2xl font-bold text-center py-8'>Founder</h2>
                                    <p className='text-center text-[#38bdf8] text-4xl font-bold'>Santiago Boher</p>
                                        <div className='text-center font-medium'>
                                            <p className="py-2 my-5">
                                            Alias: BOB THE CONTRUCTOR </p>
                                        </div>
                    </div>
                </div>    
            </div>
                <div className="w-full bg-white text-black py-16 px-4 ">
                    <div className="max-w[1240px] mx-auto gap-5 grid md:grid-auto">
                                <div className="pl-4 mx-auto justify-center w-3/4">
                                        <h1 className="text-black md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center"> ¿Porque creamos esta aplicacion?</h1>
                                            <div className="bg-gray-300 rounded-xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5">
                                            <p>
                                            En EasyPays, creemos que la vida es demasiado corta para estar lidiando con complicados cálculos de gastos compartidos. Nuestro 
                                            "por qué" es sencillo: queremos que las finanzas grupales sean fáciles, transparentes y sin estrés. 
                                            Sabemos que las mejores experiencias se disfrutan en compañía, pero cuando llega la hora de dividir la cuenta, 
                                            todo se complica. Nos propusimos cambiar eso. Nuestra motivación es ayudar a las personas a disfrutar de esos momentos 
                                            sin que el dinero se convierta en un obstáculo.</p>
                                        </div>
                                </div>
                                <div className="px-4 mx-auto justify-center w-3/4 ">
                                        <h1 className="text-black md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center"> ¿Mision de este proyecto?</h1>
                                            <div className="bg-gray-300 rounded-xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5">
                                            <p>
                                            Nuestra misión es eliminar el caos y la incomodidad de los gastos compartidos, brindando una herramienta intuitiva que facilite la vida de las personas. 
                                            Queremos que nuestros usuarios puedan cargar sus tickets de compra y ver, con un simple clic, cómo se divide la cuenta entre todos. 
                                            De esta manera, estamos haciendo que la gestión financiera en grupo sea rápida, eficiente y justa para todos.</p>
                                        </div>
                                </div>
                                <div className="pl-4 mx-auto justify-center w-3/4">
                                        <h1 className="text-black md:text-1xl sm:text-5xl text-4xl font-bold md:py-3 text-center">¿Visión de nuestro objetivos?</h1>
                                            <div className="bg-gray-300 rounded-xl my-10 text-black md:text-1xl sm:text-1xl text-xl py-5 px-5">
                                            <p>
                                            Nuestra visión es convertirnos en la plataforma de referencia para cualquier situación en la que se necesite dividir gastos. 
                                            Imaginamos un futuro donde nadie se preocupe por cálculos manuales ni malentendidos financieros en grupo. 
                                            Queremos que en cualquier rincón del mundo, ya sea una reunión de amigos, una salida familiar o un viaje de negocios, 
                                            nuestra solución sea el aliado perfecto para una gestión de gastos impecable y sin complicaciones.</p>
                                        </div>
                                </div>
                        </div>
                </div>
                
        </div>
    );
}

export default Nosotros;