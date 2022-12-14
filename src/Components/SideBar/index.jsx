import { useContext, useState } from 'react'
import * as C from './styled'

// components
import { Logout } from '../Logout'
import { ToggleTheme } from '../Theme_modo'
import { Context } from '../../Contexts/ContextGeral'

// icons
import { MagnifyingGlass, House, SignOut, Image, Book, User, ChatDots, ArrowLeft, Gear, ListChecks } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

// Auto animate
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const Sidebar = () => {
    const { state } = useContext(Context)
    const [ sidebarOpen, setSidebarOpen ] = useState(true)
    const [ parent, enableAnimations ] = useAutoAnimate()
    const { pathname } = useLocation()

    const handleSidebarOpen = () => {
        setSidebarOpen(p => !p)
        enableAnimations(false)
    }


    return(
        <C.Container>
            <C.SSidebar bg={state.themeStatus.bg} isOpen={sidebarOpen} ref={parent}>
                <>
                    <C.SSidebarButton bg={state.themeStatus.bg} isOpen={sidebarOpen} onClick={() => handleSidebarOpen()}>
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
                {/* <C.SDivider bg={state.themeStatus.bg} /> */}
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
        label: 'Vendas',
        icon: <ListChecks />,
        to: '/vendas',
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
        label: 'Sugest??o / Ajuda',
        icon: <ChatDots />,
        to: '/chat',
        notification: 0
    },
    {
        label: 'Perfil',
        icon: <User />,
        to: '/perfil',
        notification: 3
    },
    {
        label: 'Admin',
        icon: <Gear />,
        to: '/admin',
        notification: 0
    }
]

