import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './Private'
import { Home } from '../pages/Home'
import { Layout } from '../Components/theme'
import { LoginPage } from '../pages/Login'
import { Perfil } from '../pages/Perfil'

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
                            <Route path='galeria' element={<h1>Em breve...</h1>}/>
                            <Route path='cursos' element={<h1>cursos</h1>}/>
                            <Route path='chat' element={<h1>chat</h1>}/>
                            <Route path='perfil' element={<Perfil />}/>
                        </Routes>
                    </Layout>
                </PrivateRoutes>
            }>
            </Route>
        </Routes>
    )
}