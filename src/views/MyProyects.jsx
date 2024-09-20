import React from "react";
import TransitionsModal from '../components/layout/ModalProyects';
import Typography from '@mui/material/Typography';

const MyProyects = () =>{
    return(
        <div className="bg-black flex space-around gap-4">
            <div className="max-w-auto mx-auto grid md:grid-cols-4 gap-4 flex flex-col pl-4 justify-center">
                <div className="bg-white w-[200px] rounded-2xl h-[200px] ">
                    <h1 className="text-black">Agregar Proyecto</h1>
                    <TransitionsModal className="w-[50px]"></TransitionsModal>
                </div>
                <div className="bg-white rounded-2xl text-black w-[300px] flex flex-col text-center justify-center">
                <Typography id="transition-modal-title" variant="h5" component="h6">
                Proyecto: ViernesPasado
                </Typography>
                <Typography id="transition-modal-title" variant="p">
                Proyecto del finde pasado, bodegón Bellagamba.
                </Typography>
                <button className="bg-[#38bdf8] mx-5 rounded-md font-medium py-3 text-black flex text-center justify-center">Ver Proyecto</button>
                </div>
                <div className="bg-white rounded-2xl text-black w-[300px] flex flex-col text-center justify-center">
                <Typography id="transition-modal-title" variant="h5" component="h6">
                Proyecto: ViernesPasado
                </Typography>
                <Typography id="transition-modal-title" variant="p">
                Proyecto del finde pasado, bodegón Bellagamba.
                </Typography>
                <button className="bg-[#38bdf8] mx-5 rounded-md font-medium py-3 text-black flex text-center justify-center">Ver Proyecto</button>
                </div>
                <div className="bg-white rounded-2xl text-black w-[300px] flex flex-col text-center justify-center">
                <Typography id="transition-modal-title" variant="h5" component="h6">
                Proyecto: ViernesPasado
                </Typography>
                <Typography id="transition-modal-title" variant="p">
                Proyecto del finde pasado, bodegón Bellagamba.
                </Typography>
                <button className="bg-[#38bdf8] mx-5 rounded-md font-medium py-3 text-black flex text-center justify-center">Ver Proyecto</button>
                </div>

            </div>
        </div>
    )
}

export default MyProyects;