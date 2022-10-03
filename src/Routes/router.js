import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './Private'
import { Home } from '../pages/Home'
import { Layout } from '../Components/theme'
import { LoginPage } from '../pages/Login'

export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home/*' element={
                <PrivateRoutes>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home />}/>
                            <Route path='dash' element={<h1>dash</h1>}/>
                            <Route path='dist' element={<h1>dist</h1>}/>
                        </Routes>
                    </Layout>
                </PrivateRoutes>
            }>
            </Route>
        </Routes>
    )
}