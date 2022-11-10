import * as C from './styled'
import { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// firebase
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../services/firebase'
import { Context } from '../../Contexts/ContextGeral'

import { ToggleTheme } from '../../Components/Theme_modo'
import Foguete from '../../assets/foguete.png'

import toast, { Toaster } from 'react-hot-toast';

// API
import { useApi } from '../../services/userApi'

export const LoginPage = () => {
    const { state, dispatch } = useContext(Context)

    // form
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [campos, setCampos] = useState(false)
    const [msgInput, setMsgInput] = useState(false)

    const navigate = useNavigate()
    
    const handleForm =  () => {

        if(email !== '' && senha !== ''){
            useApi.user(email, senha)
            .then((e)=>{
                console.log( "then",e)
                if(e.body){
                    dispatch({
                        type: 'USER_INFO',
                        payload: {
                            userStatus: e.body,
                            Nome: e.body.Nome,
                            Cargo: e.body.Cargo
                        }
                    })
                    localStorage.setItem('@Auth:token', e.statusCode)
                    localStorage.setItem('@Auth:user', JSON.stringify(e.body))
                    navigate('/home')
                } else{
                    toast.error("Email ou senha está errada")
                    setCampos(true)
                }
            })
            .catch((error)=>{
                // console.log(error)
                toast.error("Tem algo errado! tente novamente mais tarde")
                setCampos(true)
            })

        } else {
            setCampos(true)
            setMsgInput(true)
        }
    }

    return state.dadosUser.User !== null ? <Navigate to='/home' /> : (
        <C.Container>
            <Toaster />
            <C.FormContainer bg={state.themeStatus.bg} campos={campos}>
                <div className='img'>
                    <img src={Foguete} alt="" />
                </div>
                <div className='login'>
                    
                    <div className='title'>
                        <h2>Login</h2>
                        <ToggleTheme msg={true} />
                    </div>
                    {msgInput && 
                        <p className='alert'>Preencha os todos campos abaixo</p>
                    }
                    <label htmlFor="">Email
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </label>
                    <label htmlFor="">Senha
                        <input type="text" value={senha} onChange={(e)=>setSenha(e.target.value)} />
                    </label>
                    <button onClick={handleForm}>Enviar</button>
                </div>
            </C.FormContainer>
        </C.Container>
    ) 
}