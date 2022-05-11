import {Grid, List} from "@mui/material"
import {useState} from "react"
import axios from 'axios'
import TodoItem from '../../components/TodoItem/TodoItem'

const EditTodo = ({todo:{todoName, todoDescription}}) => {
    const [editTodo, setEditTodo, updateTodoName, updateTodoDescription] = useState();

    useState(() => {
        axios.put("http://localhost:8080/show-Todo", {
            todoName: updateTodoName,
            todoDescription: updateTodoDescription
        })
        .then(response => setEditTodo(response.data))
    })
    return(
        <>
            <Grid container>
                <List>
                    {
                        editTodo.map( 
                            todo => <TodoItem 
                                        key={todo.id}
                                        todo={todo} 
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}

export default EditTodo