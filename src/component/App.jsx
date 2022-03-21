import React from 'react'
import Content from './Content'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Content />}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}


export default App;