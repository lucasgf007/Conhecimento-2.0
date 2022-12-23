import * as C from './styled'

import toast, { Toaster } from 'react-hot-toast';

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

//  Services
import { useApi } from '../../services/userApi'

export const DadosUser = () => {
    const { state, dispatch } = useContext(Context)
    const [ Nome, setNome ] = useState('')
    const [ Cargo, setCargo ] = useState('')
    const [ Email, setEmail ] = useState('')

    const handleUpdate = () => {
        useApi.updateUser(state.dadosUser.id, Nome!=''?Nome:state.dadosUser.nome , Email!=''?Email:state.dadosUser.email, Cargo!=''?Cargo:state.dadosUser.cargo)
        .then((e)=>{
            console.log( 'update', e)
            if(e.status === 'Atualizado com sucesso'){
                toast.success("Perfil Atualizado")
                dispatch({
                    type: 'USER_INFO',
                    payload: {
                        nome: Nome!=''?Nome:state.dadosUser.nome,
                        email: Email!=''?Email:state.dadosUser.email,
                        cargo: Cargo!=''?Cargo:state.dadosUser.cargo
                    }
                })
                setNome('')
                setEmail('')
                setCargo('')
            } else{
                toast.success("Algo deu errado")
            }
        })
    }


    return(
        <C.Conteiner>
            <Toaster />
            <C.Header bg={state.themeStatus.bg}>
                Meus dados
            </C.Header>
            <C.Dados bg={state.themeStatus.bg}>

                <label> Nome
                    <input type='text' placeholder={state.dadosUser.nome} value={Nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label> Cargo
                    <input type='text' placeholder={state.dadosUser.cargo} value={Cargo} onChange={(e) => setCargo(e.target.value)} />
                </label>
                <label> Email
                    <input type='text' placeholder={state.dadosUser.email} value={Email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <button onClick={handleUpdate}>Atualiza Perfil</button>
            </C.Dados>
        </C.Conteiner>
    )
}

