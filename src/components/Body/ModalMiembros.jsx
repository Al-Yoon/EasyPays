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

export default function ModalMiembros({ addMember }) {
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({
        userId: "",
        firstName: "",
        lastName: "",
        email: ""
    });
    const [error, setError] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
        setError(""); // Clear error message when opening
    };
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = addMember({
            ...formState,
            userId: parseInt(formState.userId)
        });
        if (success) {
            // Si el miembro fue añadido correctamente, limpiar el formulario y cerrar el modal
            setFormState({ userId: "", firstName: "", lastName: "", email: "" });
            handleClose();
        } else {
            // Si hay un error, mostrar el mensaje de error
            setError("El usuario ya existe.");
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
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Usuario ID:
                            </Typography>
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    name="userId"
                                    value={formState.userId}
                                    onChange={handleChange}
                                    placeholder="Usuario ID"
                                    inputProps={ariaLabel}
                                    type="number"
                                    required
                                />
                                {error && <Typography variant="caption" color="error">{error}</Typography>}
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Nombre:
                                </Typography>
                                <Input
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    inputProps={ariaLabel}
                                    required
                                />
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    Apellido:
                                </Typography>
                                <Input
                                    name="lastName"
                                    value={formState.lastName}
                                    onChange={handleChange}
                                    placeholder="Apellido"
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