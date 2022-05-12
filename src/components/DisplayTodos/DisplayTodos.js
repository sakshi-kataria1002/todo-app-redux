import { Grid, List } from "@mui/material"
import TodoItem from "../TodoItem/TodoItem"
import axios from 'axios'
import {useEffect} from 'react'
import {connect} from "react-redux"
import {showTodo} from "../../redux/todoList/todo.action"

const DisplayTodo = ({showTodo,getTodoList}) => {
    //const [todoList, setTodoList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/show-Todo")
        //.then(response => setTodoList(response.data))
        .then(response => showTodo(response.data))
    })
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <List sx={{width:'100%', maxWidth:360, bgcolor:'background.paper'}}>
                    {
                        getTodoList.map( 
                            todo => <TodoItem 
                                        key={todo._id}
                                        todo={todo} 
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    showTodo: todoList => dispatch(showTodo(todoList))
})

const mapStateToProps = state => ({
    getTodoList: state.todo.todoList
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)