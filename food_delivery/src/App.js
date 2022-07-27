import { Route, Routes } from 'react-router-dom';
import React from 'react'
import {AnimatePresence} from 'framer-motion'
import { Admin, Header, MainContainer } from './components';
import Signup from './components/Signup';
import Login from './components/Login';
import Restaurant from './components/Restaurant';

const App = () => {
  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-primary">
        <Header/>

        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route exact path='/*' element={<MainContainer />}/>
            <Route exact path='/Admin' element={<Admin />}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Restaurant" element={<Restaurant />}/>
          </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App