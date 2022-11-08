import * as C from './styled'
import { BigHead } from '@bigheads/core'

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

export const ContainerAvatar = () => {
    const { state } = useContext(Context)
    const [ avatar, setAvatar ] = useState({
        body: undefined,
        clothingColor: undefined
    })

    function handleBodyObject (e){
        let updateValue = {};
        updateValue = {body: e}
        setAvatar(item => ({
            ...item,
            ...updateValue
        }))
    }
    function handleClothingColorObject (e){
        let updateValue = {};
        updateValue = {clothingColor: e}
        setAvatar(item => ({
            ...item,
            ...updateValue
        }))
    }

    return(
        <C.Container>
            <div className='form'>
                <h3>Avatar SeuBoné</h3>
                <label> Corpo
                    <select name="body" onChange={e => handleBodyObject(e.target.value)}>
                        <option value="chest">Homem</option>
                        <option value="breasts">Mulher</option>
                    </select>
                </label>
                <label> Camisa
                    <select name="camisa" onChange={e => handleClothingColorObject(e.target.value)}>
                        <option value="blue">Azul</option>
                        <option value="white">Branco</option>
                        <option value="black">Preto</option>
                        <option value="green">Verde</option>
                        <option value="red">vermelho</option>
                    </select>
                </label>
                <button onClick={()=>console.log(avatar)}>ver</button>
            </div>
            <div className='avatar'>
                <BigHead
                    accessory="none"
                    body={avatar.body}
                    circleColor='blue'
                    clothing="shirt"
                    clothingColor={avatar.clothingColor}
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
            </div>
        </C.Container>
    )
}