import * as C from './styled'
import { Sidebar } from '../SideBar'

export const Layout = ({ children }) => {
    

    return(
        <C.SLayout>
            <Sidebar />
            <C.SMain>
                {children}
            </C.SMain>
        </C.SLayout>
    )
}