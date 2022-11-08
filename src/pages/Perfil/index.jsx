import * as C from './styled'
import { BigHead } from '@bigheads/core'

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

// icon
import { Pencil } from 'phosphor-react'

// components
import { DadosUser } from '../../Components/DadosUser'
import ReactModal from 'react-modal'
import { ContainerAvatar } from '../../Components/ContainerAvatar'

ReactModal.setAppElement('#root')

export const Perfil = () => {
    const { state } = useContext(Context)
    const [ modalIsOpen, setIsOpen ] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }
    function handleCloseModal() {
        setIsOpen(false)
    }


    return(
        <C.Container bg={state.themeStatus.bg}>
            
            <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                        content: {
                            color: '#2e3033'
                        }
                    }}
            >
                <C.CloseContainer>
                    <button onClick={handleCloseModal}>Fechar</button>
                </C.CloseContainer>
                <ContainerAvatar />
            </ReactModal>

            <div className='min-container'>
                <C.DadosPerfil bg={state.themeStatus.bg}>
                    <div className='card'>
                        <DadosUser />
                    </div>
                </C.DadosPerfil>
                <C.Perfil bg={state.themeStatus.bg}>
                    <div className='card'>
                        <div className='foto'>
                            <BigHead
                                accessory="none"
                                body="chest"
                                circleColor="blue"
                                clothing="shirt"
                                clothingColor="white"
                                eyebrows="angry"
                                eyes="simple"
                                faceMask={false}
                                faceMaskColor="white"
                                facialHair="none2"
                                graphic="gatsby"
                                hair="short"
                                hairColor="black"
                                hat="beanie"
                                hatColor="green"
                                lashes
                                lipColor="purple"
                                mask
                                mouth="tongue"
                                skinTone="black"
                            />
                            <div className='icon'>
                                <button onClick={handleOpenModal}>
                                    <Pencil size={35} />
                                </button>
                            </div>
                        </div>
                        <div className='detalhes'>
                            <h3>{state.dadosUser.User.name}</h3>
                            <p>Dev</p>
                        </div>
                    </div>
                </C.Perfil>
            </div>
        </C.Container>
    )
}