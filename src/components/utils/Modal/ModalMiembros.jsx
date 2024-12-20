import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import { createMember } from '../../../api/users_project';

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

export default function ModalMiembros({ addMember }) {
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({
        nombre: "",
        email: "",
    });
    const [error, setError] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
        setError(""); 
    };
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newMember = { 
                nombre: formState.nombre,  
                email: formState.email, 
                porcentaje: 0,
                SaldoPAgar: 0
            };
            const response = await createMember(newMember);
            addMember(response);
            setFormState({ nombre: "", email: "" });
            handleClose();
        } catch (err) {
            setError("Error al crear el miembro. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div>
            <Button onClick={handleOpen}>Añadir Miembro</Button>
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
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                {error && <Typography variant="caption" color="error">{error}</Typography>}

                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Nombre:
                                </Typography>
                                <Input
                                    name="nombre"
                                    value={formState.nombre}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    inputProps={ariaLabel}
                                    required
                                />

                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Email:
                                </Typography>
                                <Input
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    inputProps={ariaLabel}
                                    required
                                />
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