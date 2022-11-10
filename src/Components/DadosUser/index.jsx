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

    const handleUpdate = () => {
        useApi.updateUser('12', Nome, 'gabriel@gmail.com', 'DEV', '171717', 'admin')
        .then((e)=>{
            console.log( 'update', e)
            toast.success("Perfil Atualizado")
            // dispatch({
            //     type: 'USER_INFO',
            //     payload: {
            //         userStatus: e.body
            //     }
            // })
        })
        // console.log(Nome)
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
                <label> Apelido
                    <input type='text' />
                </label>
                <label> Telefone Empresarial
                    <input type='text' />
                </label>
                <label> Telefone Empresarial
                    <input type='text' />
                </label>
                <label> Telefone Pessoal
                    <input type='text' />
                </label>
                <label> Email
                    <input type='text' />
                </label>
                <label> Gmail
                    <input type='text' />
                </label>
                <label> CEP
                    <input type='text' />
                </label>
                <label> Rua + Número
                    <input type='text' />
                </label>

                <button onClick={handleUpdate}>Atualiza Perfil</button>
            </C.Dados>
        </C.Conteiner>
    )
}

