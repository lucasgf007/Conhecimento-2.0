import { useContext, useState } from 'react'
import * as C from './styled'

// components
import { Logout } from '../Logout'
import { ToggleTheme } from '../Theme_modo'
import { Context } from '../../Contexts/ContextGeral'

// icons
import { MagnifyingGlass, House, SignOut, PresentationChart, Image, Book, User, ChatDots, ArrowLeft } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

export const Sidebar = () => {
    const { state } = useContext(Context)
    const [ sidebarOpen, setSidebarOpen ] = useState(true)
    const { pathname } = useLocation()


    return(
        <C.Container>
            <C.SSidebar bg={state.themeStatus.bg} isOpen={sidebarOpen}>
                <>
                    <C.SSidebarButton bg={state.themeStatus.bg} isOpen={sidebarOpen} onClick={() => setSidebarOpen(p => !p)}>
                        <ArrowLeft />
                    </C.SSidebarButton>
                </>
                <C.Slogo>
                    {!sidebarOpen ? (<h4>SB</h4>) : (<h4>Conhecimento</h4>)}
                    
                </C.Slogo>
                <C.SSearch bg={state.themeStatus.bg} style={!sidebarOpen ? {width: `fit-content`} : {}} >
                    <C.SSearchIcon>
                        <MagnifyingGlass color='#fff' />
                    </C.SSearchIcon>
                    <input type={'search'} style={!sidebarOpen ? {width: 0, padding: 0} : {}} />
                </C.SSearch>  
                <C.SDivider bg={state.themeStatus.bg} />
    
                <C.SLinkContainerGeral>
                    {linksArray.map((e, index)=>(
                        <C.SLinkContainer key={index} isActive={pathname === `/home${e.to}`} bg={state.themeStatus.bg === 'background-light'}>
                            <C.SLink to={`/home${e.to}`} style={!sidebarOpen ? {width: `fit-content`} : {}}>
                                <C.SLinkIcon> {e.icon} </C.SLinkIcon>
                                {sidebarOpen && (
                                    <>
                                        <C.SLinkLabel> {e.label} </C.SLinkLabel>
                                        {e.notification !== 0 && 
                                            <C.SLinkNotification> {e.notification} </C.SLinkNotification>
                                        }
                                    </>
                                )}
                                
                                
                            </C.SLink>
                        </C.SLinkContainer>
                    ))}
                </C.SLinkContainerGeral>
                
                <C.SDivider bg={state.themeStatus.bg} />
                
                <C.SLinkContainer>
                    <Logout style={!sidebarOpen ? {width: `fit-content`} : {}}>
                        <C.SLinkIcon> <SignOut /> </C.SLinkIcon>
                        {sidebarOpen && <C.SLinkLabel> Sair </C.SLinkLabel>}
                    </Logout>
                </C.SLinkContainer>
                <C.SDivider bg={state.themeStatus.bg} />
                <C.Theme>
                    <ToggleTheme msg={sidebarOpen ? true : false} justify={sidebarOpen} />
                </C.Theme>
            </C.SSidebar>
        </C.Container>
    )
}

const linksArray = [
    {
        label: 'Home',
        icon: <House />,
        to: '/',
        notification: 0
    },
    {
        label: 'Dash',
        icon: <PresentationChart />,
        to: '/dash',
        notification: 5
    },
    {
        label: 'Galeria',
        icon: <Image />,
        to: '/galeria',
        notification: 0
    },
    {
        label: 'Cursos',
        icon: <Book />,
        to: '/cursos',
        notification: 0
    },
    {
        label: 'Sugestão / Ajuda',
        icon: <ChatDots />,
        to: '/chat',
        notification: 0
    },
    {
        label: 'Perfil',
        icon: <User />,
        to: '/perfil',
        notification: 3
    }
]

