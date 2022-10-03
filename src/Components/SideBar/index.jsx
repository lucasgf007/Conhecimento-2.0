import { useContext } from 'react'
import * as C from './styled'

// components
import { Logout } from '../Logout'
import { ToggleTheme } from '../Theme_modo'
import { Context } from '../../Contexts/ContextGeral'

// icons
import { MagnifyingGlass, House } from 'phosphor-react'

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
                            <C.SLinkNotification> {e.notification} </C.SLinkNotification>
                        </C.SLink>
                    </C.SLinkContainer>
                ))}

                <br />
                    <h4>Ola, {state.dadosUser.User.displayName}</h4>
                    <ToggleTheme />
                    <br />
                    <Logout />
                    <br />
                    <button onClick={()=>console.log(state)}>Ver</button> 
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
        icon: <House />,
        to: '/dash',
        notification: 5
    },
    {
        label: 'Home',
        icon: <House />,
        to: '/dist',
        notification: 0
    }
]