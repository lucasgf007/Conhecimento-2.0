import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginPage } from './pages/Login'

export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}