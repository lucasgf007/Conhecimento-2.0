import { Route, Routes } from 'react-router-dom'
import { Dash } from '../pages/HomeDash'

export const RouterHome = () => {

    return(
        <Routes>
            <Route path={`/home/dash`} element={<Dash />}/>
        </Routes>
    )
}