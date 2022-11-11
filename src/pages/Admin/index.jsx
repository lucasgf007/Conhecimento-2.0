import * as C from './styled'

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

// icon


export const Admin = ({ children }) => {
    const { state } = useContext(Context)

    return(
        <C.Container bg={state.themeStatus.bg}>
            <C.Header bg={state.themeStatus.bg}>
                <div className='card'>
                    <C.navmenu>
                        <ul>
                            <li>
                                <C.SLink to='/home/admin'>
                                    Usuários
                                </C.SLink>
                            </li>
                            <li>
                                <C.SLink to='/home/admin/vendas'>
                                    Vendas
                                </C.SLink>
                            </li>
                            <li>
                                <C.SLink to='/home/admin/designers'>
                                    Designer
                                </C.SLink>
                            </li>
                            <li>
                                <C.SLink to='/home/admin/pos_vendas'>
                                    Pós-vendas
                                </C.SLink>
                            </li>
                        </ul>
                    </C.navmenu>
                    <C.btns bg={state.themeStatus.bg}>
                        <C.SLink to='/home/admin/bi'>
                            BI
                        </C.SLink>
                    </C.btns>
                </div>
            </C.Header>
            <C.Body>
                <div className='card'>
                    {children}
                </div>
            </C.Body>
        </C.Container>
    )
}