import React from "react";

const Error = () => {
    return (
        <div className="text-white bg-black">
            <div className="mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-5">
                <p className="mx-auto font-bold md:text-3xl sm:text-2xl text-xl pt-2">ERROR 404</p>
                <h1 className="text-[#38bdf8] md:text-1xl sm:text-6xl text-4xl font-bold md:py-6">Fallos en el cliente</h1>
                <div className="md:text-2xl sm:text-1xl text-xl">
                    <h1>Su conexión está fallando</h1>
                </div>
            </div>
        </div>
    );
};

export default Error;
