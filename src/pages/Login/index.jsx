import * as C from './styled'
import { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { Context } from '../../Contexts/ContextGeral'


export const LoginPage = () => {
    const { state, dispatch } = useContext(Context)

    // form
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate = useNavigate()
    
    const handleForm = () => {
        const form = {email, senha}
        console.log('...form',form)

        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch({
                type: 'USER_INFO',
                payload: {
                    userStatus: user
                }
            })
            sessionStorage.setItem('@AuthFirebase:token', user.uid)
            sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
            navigate('/home')
            
          })
          .catch((error) => {
            alert('email ou senha incorretos!')
          });
    }

    return state.dadosUser.User !== null ? <Navigate to='/home' /> : (
        <C.Container>
            Login
            <br />
            <label htmlFor="">Email
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label htmlFor="">Senha
                <input type="text" value={senha} onChange={(e)=>setSenha(e.target.value)} />
            </label>
            <button onClick={handleForm}>Enviar</button>
            
        </C.Container>
    ) 
}