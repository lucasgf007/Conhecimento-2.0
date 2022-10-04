import { useContext } from 'react'
import * as C from './styled'

// components
import { Logout } from '../Logout'
import { ToggleTheme } from '../Theme_modo'
import { Context } from '../../Contexts/ContextGeral'

// icons
import { MagnifyingGlass, House, SignOut, PresentationChart, Image, Book, User, Gear, ChatDots } from 'phosphor-react'

export const Sidebar = () => {
    const { state } = useContext(Context)

    return(
        <C.Container>
            <C.SSidebar bg={state.themeStatus.bg}>
                <C.Slogo>
                    img
                </C.Slogo>
                <C.SSearch bg={state.themeStatus.bg}>
                    <C.SSearchIcon>
                        <MagnifyingGlass color='#fff' />
                    </C.SSearchIcon>
                    <input type={'search'} />
                </C.SSearch>  
                <C.SDivider bg={state.themeStatus.bg} />
    
                {linksArray.map((e, index)=>(
                    <C.SLinkContainer key={index}>
                        <C.SLink to={`/home${e.to}`}>
                            <C.SLinkIcon> {e.icon} </C.SLinkIcon>
                            <C.SLinkLabel> {e.label} </C.SLinkLabel>
                            {e.notification !== 0 && 
                                <C.SLinkNotification> {e.notification} </C.SLinkNotification>
                            }
                        </C.SLink>
                    </C.SLinkContainer>
                ))}
                <C.SDivider bg={state.themeStatus.bg} />
                {secondaryLinksArray.map((e, index)=>(
                    <C.SLinkContainer key={index}>
                        <C.SLink to={`/home${e.to}`}>
                            <C.SLinkIcon> {e.icon} </C.SLinkIcon>
                            <C.SLinkLabel> {e.label} </C.SLinkLabel>
                        </C.SLink>
                    </C.SLinkContainer>
                ))}
                <C.SLinkContainer>
                    <Logout >
                        <C.SLinkIcon> <SignOut /> </C.SLinkIcon>
                        <C.SLinkLabel> Sair </C.SLinkLabel>
                    </Logout>
                </C.SLinkContainer>
                <C.SDivider bg={state.themeStatus.bg} />
                <C.Theme>
                    <ToggleTheme msg={true} />
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
        to: '/dist',
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
        to: '/dist',
        notification: 0
    },
    {
        label: 'Perfil',
        icon: <User />,
        to: '/perfil',
        notification: 3
    }
]

const secondaryLinksArray = [
    {
        label: 'Configurações',
        icon: <Gear />,
        to: '/config'
    },
]