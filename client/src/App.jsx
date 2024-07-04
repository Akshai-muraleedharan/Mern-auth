import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={ <About /> } />
      <Route  path='/login' element={<Login /> }/>
      <Route  path='/profil' element={<Profile /> }/>
      <Route  path='/signup' element={<Signup /> }/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App