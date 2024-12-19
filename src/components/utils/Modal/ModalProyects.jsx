import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ariaLabel = { 'aria-label': 'description' };

const TransitionsModal = ({ addProject }) => {
    const [open, setOpen] = useState(false);
    const [nombre, setProjectName] = useState("");
    const [descripcion, setProjectDescription] = useState("");
    const [fecha, setProjectDate] = useState("");

    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim()) {
            const project = {
                nombre: nombre,
                descripcion: descripcion,
                fecha: fecha,
                total:0,
                usuarioId:userObj.id,
            };
            addProject(project);
            setProjectName("");
            setProjectDescription("");
            setProjectDate("");
            handleClose();
        }
    };

    return (
        <div>
            <Button onClick={handleOpen}><AddIcon/></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='mx-auto text-center flex flex-col justify-center'>
                            <CloseIcon onClick={handleClose} />
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Nombre del Proyecto:
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    inputProps={ariaLabel}
                                    required
                                />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Descripción:
                                </Typography>
                                <Input
                                    placeholder="Descripción"
                                    value={descripcion}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                    inputProps={ariaLabel}
                                    required
                                />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Fecha:
                                </Typography>
                                <Input
                                    type='date'
                                    value={fecha}
                                    onChange={(e) => setProjectDate(e.target.value)}
                                    inputProps={ariaLabel}
                                    required
                                />
                                <button type="submit" className="bg-[#38bdf8] w-[230px] rounded-md font-medium my-6 mx:auto md:mx-0 py-3 text-black">
                                    Crear
                                </button>
                            </Box>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default TransitionsModal;