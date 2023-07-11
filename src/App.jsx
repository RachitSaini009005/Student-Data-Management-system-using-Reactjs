//name ,3 subjects percentage, create 5 student details
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createstd from './comp/Createstd'
import Stddetails from './comp/Stddetails'
import Home from './comp/Home'
import Editstd from './comp/Editstd'
const App = () => {
  return (
    <div>

        <BrowserRouter>
          <Home/>
           <Routes>

             <Route path="/student" element={<Createstd/>}/>
              <Route path="/details" element={<Stddetails/>}/>
              <Route path='/edit/:index' element={<Editstd/>}/>

           </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App