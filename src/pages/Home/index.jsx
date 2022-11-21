import * as C from './styles'
import { Context } from '../../Contexts/ContextGeral'
import { useContext } from 'react'
import { CalendarBlank, ChartLine, Globe, Rocket, Trophy } from 'phosphor-react'
import { BigHead } from '@bigheads/core'


export const Home = () => {
    const { state, dispatch } = useContext(Context)

    return(
        <C.Container bg={state.themeStatus.bg}>
                <C.Header bg={state.themeStatus.bg}>
                    <div className='container'>
                        <div className='card'>
                            <div className='data'>
                                <div className='icon'>
                                    <ChartLine size={40} />
                                </div>
                                <div className='text'>
                                    <h3>pontos diários</h3> 
                                    <span>1700 Pts</span>
                                </div>
                            </div>
                            <div className='rodape'>
                                <CalendarBlank size={16} />
                                <span>16/11/2022</span>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='data'>
                                <div className='icon'>
                                    <Rocket size={40} />
                                </div>
                                <div className='text'>
                                    <h3>pontos semanais</h3> 
                                    <span>1700 Pts</span>
                                </div>
                            </div>
                            <div className='rodape'>
                                <CalendarBlank size={16} />
                                <span>10/11/2022 - 16/11/2022</span>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='data'>
                                <div className='icon'>
                                    <Globe size={40} />
                                </div>
                                <div className='text'>
                                    <h3>Geral semanal</h3>
                                    <span>1700 Pts</span>
                                </div>
                            </div>
                            <div className='rodape'>
                                <CalendarBlank size={16} />
                                <span>10/11/2022 - 16/11/2022</span>
                            </div>
                        </div>
                    </div>
                </C.Header>
                <C.body bg={state.themeStatus.bg}>
                    <div className='podio'> 
                        <h3>Primeiro lugar semanal</h3>
                        <hr />                    
                        <div className='dados'>
                            <div className='perfil_foto'>
                                <BigHead />
                            </div>
                            <div className='perfil_dados'>
                                <h2>1º <Trophy size={32} /> </h2>
                                <h3>Lucas Gabriel</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div className='notification'>
                        <h3>Novidades</h3>
                        <hr /> 
                    </div>
                </C.body>
                <C.List_semanal bg={state.themeStatus.bg}>
                    <h4>Meta semanal</h4>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <th>Perfil</th>
                                <th>Nome</th>
                                <th>Porcetagem</th>
                                <th>Emoji</th>

                            </tr>
    
                            <tr>
                                <td>
                                    <BigHead />
                                </td>
                                <td>Lucas Gabriel</td>
                                <td>
                                    <progress value="70" max="100" /> 70%
                                </td>
                                <td className='emoji'>🔥</td>
                            </tr>
                            <tr>
                                <td>
                                    <BigHead />
                                </td>
                                <td>Godoy</td>
                                <td>
                                    <progress value="30" max="100" /> 30%
                                </td>
                                <td className='emoji'>😰</td>
                            </tr>
                            <tr>
                                <td>
                                    <BigHead />
                                </td>
                                <td>Davi</td>
                                <td>
                                    <progress value="50" max="100" /> 50%
                                </td>
                                <td className='emoji'>🤨</td>
                            </tr>
                        </tbody>
                    </table>
                </C.List_semanal>
        </C.Container>
       
    )
}