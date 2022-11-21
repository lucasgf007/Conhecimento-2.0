import { ArrowClockwise } from 'phosphor-react'
import * as C from './styled'

import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

export const Vendas = () => {
    const { state } = useContext(Context)
    const [ de, setDe ] = useState()
    const [ ate, setAte ] = useState()

    return(
        <C.Container bg={state.themeStatus.bg}>
            <C.Header className='card' bg={state.themeStatus.bg}>
                <div className='filter'>
                    <span>
                        De: <input type="date" className='data' onChange={(e) => setDe(e.target.value)} />
                    </span>
                    <span>
                        Até: <input type="date" className='data' onChange={(e) => setAte(e.target.value)} />
                    </span>
                </div>
                <div className='update'>
                    <button onClick={() => console.log( 'Data', {de, ate} )}>
                        Atualizar <ArrowClockwise size={25} />
                    </button>
                </div>
            </C.Header>
            <C.Body className='card'>
                <h3>Vendas por data</h3>
                <hr />
                <div className='tabela'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Data</th>
                                <th>ID geral</th>
                                <th>Nome da empresa</th>
                                <th>Nome do card</th>
                                <th>Número</th>
                                <th>N° Folha</th>
                                <th>Qtd.</th>
                                <th>Produto</th>

                            </tr>

                            <tr>
                                <td>02-06-2001</td>
                                <td>102</td>
                                <td>Nome da empresa aaaaaa</td>
                                <td>Nome do card</td>
                                <td>8496624926</td>
                                <td>2</td>
                                <td>30</td>
                                <td>Americano</td>
                            </tr>
                            <tr>
                                <td>02-06-2001</td>
                                <td>102</td>
                                <td>Nome da empresa 2</td>
                                <td>Nome do card</td>
                                <td>8496624926</td>
                                <td>2</td>
                                <td>30</td>
                                <td>Americano</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </C.Body>
        </C.Container>
    )
}