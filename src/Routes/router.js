import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes, Permission } from './Private'
import { Home } from '../pages/Home'
import { Layout } from '../Components/theme'
import { LoginPage } from '../pages/Login'
import { Perfil } from '../pages/Perfil'
import { Admin } from '../pages/Admin'
import { Users } from '../Components/Users'

export const Router = () => {

    return(
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/home/*' element={
                <PrivateRoutes>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='dash' element={<h1>dash</h1>}/>
                            <Route path='galeria' element={<h1>Em breve...</h1>}/>
                            <Route path='cursos' element={<h1>cursos</h1>}/>
                            <Route path='chat' element={<h1>chat</h1>}/>
                            <Route path='perfil' element={<Perfil />}/>
                            <Route path='admin/*' element={
                                <Permission>
                                    <Admin>
                                        <Routes>
                                            <Route path='/' element={<Users />} />
                                            <Route path='vendas' element={<h1>vendas</h1>} />
                                            <Route path='designers' element={<h1>designers</h1>} />
                                            <Route path='pos_vendas' element={<h1>Pós-vendas</h1>} />
                                            <Route path='bi' element={<h1>BI</h1>} />
                                        </Routes>
                                    </Admin>
                                </Permission>
                            }/>
                        </Routes>
                    </Layout>
                </PrivateRoutes>
            }>
            </Route>
        </Routes>
    )
}