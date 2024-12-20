import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransitionsModal from '../components/utils/Modal/ModalProyects';
import Historial from '../components/Assets/historial.svg';
import UpArrow from '../components/Assets/arrow-up-outline.svg';
import DownArrow from '../components/Assets/arrow-down-outline.svg';
import DeleteButton from '../components/utils/Buttons/DeleteButton';
import gerProjectByUserId from '../api/projects_api';
//import {getProyect,deleteProject,createProject} from '../api/projects_api'; //Necesitamos esto aca para traer los proyectos del user

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [userBalance, setUserBalance] = useState(0);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
            const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
            setProjects(savedProjects);
        };
        fetchProjects();
    }, []);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        localStorage.setItem('userBalance', userBalance);
    }, [userBalance]);

    const getTotalAmount = (total) => {
        const storedTotal = localStorage.getItem(`totalAmountFor${total.replace(/-/g, '')}`);
        return storedTotal ? JSON.parse(storedTotal) : 0;
    };

    const getTotalProjectAmount = () => {
        return projects.reduce((sum, project) => sum + getTotalAmount(project.total), 0);
    };

    const addProject = (newProject) => {
        const projectTotal = newProject.nombre.trim().toLowerCase().replace(/\s+/g, '-');
        setProjects([...projects, { ...newProject, total: projectTotal }]);
    };

    const handleViewProject = (slug) => {
        const path = slug === "proyecto-finde-pasado" ? `/projects/proyecto-finde-pasado` : `/newprojects/${slug}`;
        navigate(path);
    };

    const handleDeleteProject = () => {
        const updatedProjects = projects.filter(project => project.total !== selectedProjectSlug);
        setProjects(updatedProjects);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
        localStorage.removeItem(`totalAmountFor${selectedProjectSlug.replace(/-/g, '')}`);
        setShowDeleteModal(false);
    };

    const handleBalanceChange = (e) => {
        setUserBalance(e.target.value);
    };

    const ProjectCard = ({ project }) => (
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg">
            <img className='w-20 mx-auto mt-auto bg-transparent' src={Historial} alt="/" />
            <h2 className='text-2xl font-bold text-center pt-8 flex justify-center'>Proyecto: {project.nombre}</h2>
            <div className='text-center font-medium'>
                <p className='py-2 my-5'>{project.descripcion}</p>
                <p className='py-2 my-5'>{project.fecha}</p>
                <p className='py-2 my-5'>Gastado: {getTotalAmount(project.total)} $</p>
            </div>
            <button className='bg-[#38bdf8] text-black w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center' onClick={() => handleViewProject(project.total)}>
                Ver Proyecto
            </button>
            <button className='bg-[#e57373] text-red-700 w-2/3 rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'
                onClick={() => {
                    setSelectedProjectSlug(project.total);
                    setShowDeleteModal(true);
                }}>
                Eliminar Proyecto
            </button>
            {showDeleteModal && (<DeleteButton onDelete={handleDeleteProject} onCancel={() => setShowDeleteModal(false)} />)}
        </div>
    );

    console.log("Traigo el token una vez logueado el user");
    const accessToken = sessionStorage.getItem("access-token");

    useEffect(() => {
        console.log("Solicitud de la lista de proyectos con el token de la sesion");
        gerProjectByUserId(accessToken, setProjects);  // TRAIGO LOS PROYECTOS USANDO LA API, los proyectos de esa sesion
    }, [setProjects, accessToken]);

    return (
        <div className="py-auto">
            <div className='w-full py-10 bg-white px-4 text-black'>
                <p className="max-w-auto mx-auto md:text-2xl sm:text-1xl text-xl pl-4">Mis</p>
                <h1 className="font-bold md:text-3xl sm:text-2xl text-xl pb-3 pl-4">Proyectos</h1>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg">
                        <h2 className='text-2xl font-bold text-center py-8'>Crear Proyecto</h2>
                        <p className='text-center text-[#38bdf8] text-4xl font-bold'><TransitionsModal addProject={addProject} /></p>
                        <div className='text-center font-medium'>
                            <p className='py-2 my-5'>Crea un proyecto para luego asignarle los gastos</p>
                        </div>
                    </div>
                    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg">
                        <h2 className='text-2xl font-bold text-center py-8 text-[#38b931] flex justify-center'>Saldo Usuario</h2>
                        <img className='w-20 mx-auto' src={UpArrow} alt="/" />
                        <input type="number" value={userBalance} onChange={handleBalanceChange}
                            className="text-center text-4xl font-bold mx-auto pl-4 pt-4" style={{ maxWidth: '80%' }}
                        />
                    </div>
                    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg">
                        <h2 className='text-2xl font-bold text-center py-8 text-[#c43434] flex justify-center'>Total Proyectos</h2>
                        <img className='w-20 mx-auto' src={DownArrow} alt="/" />
                        <div className='text-center font-medium'>
                            <p className='text-4xl py-2 my-5 pl-3 font-bold'>{getTotalProjectAmount()} $</p>
                        </div>
                    </div>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;