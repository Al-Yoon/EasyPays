import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

export default function ModalUser({ userData, onUpdateUser }) {
    const [open, setOpen] = React.useState(false);
    const [updatedUser, setUpdatedUser] = React.useState(userData);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateUser(updatedUser);
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleOpen} className='border-4'>Modificar</Button>
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
                        <button onClick={handleClose}> <CloseIcon /></button>
                        <div className='mx-auto text-center flex flex-col justify-center'>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Nombre:
                            </Typography>
                            <Box component="form" onSubmit={handleSave} sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
                                <Input name="name" placeholder="Nombre" inputProps={ariaLabel} value={updatedUser.name} onChange={handleChange} />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Apellido
                                </Typography>
                                <Input name="lastName" placeholder="Apellido" inputProps={ariaLabel} value={updatedUser.lastName || ''} onChange={handleChange} />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Email
                                </Typography>
                                <Input name="email" placeholder="Email" inputProps={ariaLabel} type='email' value={updatedUser.email} onChange={handleChange} />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Contraseña Anterior
                                </Typography>
                                <Input name="oldPassword" placeholder="Ingrese su Contraseña anterior" inputProps={ariaLabel} type='password' onChange={handleChange} />
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='pl-7'>
                                    Nueva Contraseña
                                </Typography>
                                <Input name="newPassword" placeholder="Ingrese Nueva Contraseña" inputProps={ariaLabel} type='password' onChange={handleChange} />
                                <button type="submit" className="bg-[#38bdf8] w-[230px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">
                                    Aceptar
                                </button>
                            </Box>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}