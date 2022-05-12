import React, { useState } from 'react'
import { Button, TextField, Container, Box, Modal, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios'

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

const UpdateTodo = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setTodo({ ...todo, [name]: value })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdate = async () => {
        await axios.put(`http://localhost:8080/update-todo/${params.id}`, todo)
            //.then(response => console.log(response.data))
        .then(() => {handleOpen();
            setTimeout(() => {
                navigate('/');
            }, 1000);
        })
    }

    

    return (
        <>
            <Container>
                <Box>
                    <h1 style={{ textAlign: 'center' }}>UPDATE TODO</h1>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='todoName'
                        id="outlined-basic"
                        label="Update Todo Name"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <TextField
                        style={{ width: '100%', marginButton: '10px' }}
                        name='todoDescription'
                        id="outlined-basic"
                        label="Update Todo Description"
                        variant="filled"
                        onChange={handleChange}
                    >
                    </TextField>
                    <Button onClick={handleUpdate} > <SaveIcon /></Button>
                </Box>
                <Button onClick={handleOpen}>Notification</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            UPDATED TODO
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            TODO UPDATED SUCESSFULLY !!!!!!!!!!
                        </Typography>
                    </Box>
                </Modal>
            </Container>
        </>
    )
}

export default UpdateTodo