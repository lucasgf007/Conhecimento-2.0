import * as C from './styled'

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext } from 'react'

export const DadosUser = () => {
    const { state } = useContext(Context)

    return(
        <C.Conteiner>
            <C.Header bg={state.themeStatus.bg}>
                Meus dados
            </C.Header>
            <C.Dados bg={state.themeStatus.bg}>

                {FromUser.map((item, index)=>(
                    <label key={index}> {item.label}
                        <input type={item.type} />
                    </label>
                ))}

                <button>Atualiza Perfil</button>
            </C.Dados>
        </C.Conteiner>
    )
}

const FromUser = [
    {
        label: 'Nome',
        type: 'text'
    },
    {
        label: 'Apelido',
        type: 'text'
    },
    {
        label: 'Telefone Empresarial',
        type: 'text'
    },
    {
        label: 'Telefone Pessoal',
        type: 'text'
    },
    {
        label: 'Email',
        type: 'text'
    },
    {
        label: 'Gmail',
        type: 'text'
    },
    {
        label: 'CEP',
        type: 'text'
    },
    {
        label: 'Rua + Número',
        type: 'text'
    },
]