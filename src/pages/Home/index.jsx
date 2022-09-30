import { Link } from 'react-router-dom'
import * as C from './styles'

export const Home = () => {

    return(
        <C.Container>
            Pagina Home
            <br />
            <Link to='/'>Page login</Link>
        </C.Container>
    )
}