import React from 'react';
import TableMembers from '../components/layout/TableMembers';

const Projects = ()=>{
    return(
        <div className="w-full py-[10rem] bg-white px-4 text-black">
        <p className="max-w-[1240px] md:text-2xl sm:text-1xl text-xl pl-4">Proyecto</p>
        <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Finde pasado</h1>
        <div className="max-w-auto mx-auto grid md:grid-cols-1 gap-8 pl-5 pr-5">
            
            <div className="w-full shadow-2xl bg-white flex flex-col p-4 md:my-0 my-8 text-black rounded-lg">
                <h2 className='text-2xl font-bold text-center py-8 '>Gastos</h2>
                <p className='text-center text-[#38bdf8] text-4xl font-bold'>56000 $</p>
                <div className='text-center font-medium'>
                    <p className='py-2 my-5'>Total Tickets</p>
                </div>
            </div>
            <TableMembers></TableMembers>
        </div>
    </div>
    )
}

export default Projects;