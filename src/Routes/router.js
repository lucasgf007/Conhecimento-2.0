import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from '.'
import { Home } from '../pages/Home'
import { LoginPage } from '../pages/Login'

export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home' element={<PrivateRoutes />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}