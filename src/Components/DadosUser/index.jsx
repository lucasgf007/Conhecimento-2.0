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
        useApi.updateUser(state.dadosUser.Id, Nome, Email, Cargo)
        .then((e)=>{
            console.log( 'update', e)
            toast.success("Perfil Atualizado")
            // dispatch({
            //     type: 'USER_INFO',
            //     payload: {
            //         Nome,
            //         Email,
            //         Cargo
            //     }
            // })
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
                    <input type='text' placeholder={state.dadosUser.Nome} value={Nome} onChange={(e) => setNome(e.target.value)} />
                </label>
                <label> Cargo
                    <input type='text' placeholder={state.dadosUser.Cargo} value={Cargo} onChange={(e) => setCargo(e.target.value)} />
                </label>
                <label> Email
                    <input type='text' placeholder={state.dadosUser.Email} value={Email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <button onClick={handleUpdate}>Atualiza Perfil</button>
            </C.Dados>
        </C.Conteiner>
    )
}

