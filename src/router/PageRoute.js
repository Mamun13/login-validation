import React from 'react'
import LoginForm from '../page/login/LoginForm'
import { Routes, Route } from "react-router-dom";
import AppTerritory from '../AppTerritory';

const PageRoute = () => {
  return (
    <>
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/home' element={<AppTerritory/>}/>
        </Routes>
    </>
  )
}

export default PageRoute