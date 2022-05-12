import { Divider, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const TodoItem = ({todo:{todoName, todoDescription, _id}}) => {
    const navigate = useNavigate()

    const handleOnDelete= () => {
        axios.delete(`http://localhost:8080/delete-todo/${_id}`)
        .then((response) => console.log(response))
    }
    return(
        <>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary={todoName}
                secondary={todoDescription}
            />
            <EditIcon onClick={()=> navigate(`update/${_id}`)} />
            <DeleteIcon onClick={handleOnDelete} />
            <Divider variant="inset" component="li" />
            </ListItem>
        </>
    )
}

export default TodoItem