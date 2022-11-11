import * as C from './styled'

// context
import { Context } from '../../Contexts/ContextGeral'

import { useApi } from '../../services/userApi'
import { useContext, useEffect, useState } from 'react'
import { Check, Pencil, Trash, X } from 'phosphor-react'
import toast, { Toaster } from 'react-hot-toast';

import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export const Users = () => {
    const { state } = useContext(Context)

    const [ allUsers, setAllUsers ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ modalIsOpen, setIsOpen ] = useState(false)
    const [ user, setUser ] = useState({})

    const loadUsers = () => {
        setLoading(true)

        useApi.getAllUsers()
        .then((e)=>{
            setAllUsers(e.body)

            setLoading(false)
        })
        .catch((e)=>{
            console.log(e)
            setLoading(false)
        })
        
    }

    useEffect(()=>{
        // loadUsers()
    }, [])

    const handleOpenDelet = (Nome, id) => {
        toast.custom((t) => (
            <C.Alert>
                <h3>Excluir {Nome}?</h3>
                <button className='confirm' onClick={() => handleDelet(id)}>
                    <Check size={22} />
                </button>
                <button className='cancel' onClick={() => toast.dismiss(t.id)}>
                    <X size={22} />
                </button>
            </C.Alert>
        ))
    }

    const handleDelet = (id) => {
        useApi.delUser(id.toString())
        .then((e)=>{
            console.log(e)
            loadUsers()
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const handleOpenModal = (item) => {
        setIsOpen(true) 
        setUser(item)
    }


    return(
        <C.Container bg={state.themeStatus.bg}>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={setIsOpen}
            >
                <C.Modal>
                    <div className='header'>
                        <h3>Alterar usuário {user.Nome}</h3>
                        <button onClick={() => setIsOpen(false)}> <X size={22} /> </button>
                    </div>
                    <div className='body'>
                        <label htmlFor="">Nome
                            <input type="text" placeholder={user.Nome} />
                        </label>
                    </div>
                </C.Modal>
            </ReactModal>
            <Toaster />
            <h1>Tabela de preços</h1>

            <table>
                <tbody>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Login</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {loading ? (
                        <tr>
                            <td>Carregando...</td>
                        </tr>
                    ) : (
                        allUsers.map((item)=>(
                            <tr key={item.ID}>
                                <td>{item.Nome}</td>
                                <td>{item.E_mail}</td>
                                <td>{item.Cargo}</td>
                                <td>{item.Role}</td>
                                <td>
                                    <button onClick={()=>{handleOpenModal(item)}}>
                                        <Pencil size={22} />
                                    </button>    
                                </td>
                                <td>
                                    <button onClick={() => handleOpenDelet(item.Nome, item.ID)}>
                                        <Trash size={22} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

        </C.Container>
    )
}