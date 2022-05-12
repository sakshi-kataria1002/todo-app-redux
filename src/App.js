import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UpdateTodo from './components/UpdateTodo/UpdateTodo'
import HomePage from './pages/HomePage.component'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='update/:id' element={<UpdateTodo />}/>
        </Routes>
    </>
  )
}

export default App