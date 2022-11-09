import * as C from './styled'
import { BigHead } from '@bigheads/core'

// context
import { Context } from '../../Contexts/ContextGeral'
import { useContext, useState } from 'react'

export const ContainerAvatar = () => {
    const { state } = useContext(Context)
    // useStates
    const [ body, setBody ] = useState(undefined)
    const [ lipColor, setLipColor ] = useState(undefined)
    const [ skinTone, setSkinTone ] = useState(undefined)
    const [ hair, setHair ] = useState(undefined)
    const [ hairColor, setHairColor ] = useState(undefined)
    const [ clothing, setClothing ] = useState(undefined)
    const [ clothingColor, setClothingColor ] = useState(undefined)
    const [ eyes, setEyes ] = useState(undefined)
    const [ eyebrows, setEyebrows ] = useState(undefined)
    const [ mouth, setMouth ] = useState(undefined)
    const [ facialHair, setFacialHair ] = useState(undefined)
    const [ accessory, setAccessory ] = useState(undefined)

    // function handleClothingColorObject (e){
    //     let updateValue = {};
    //     updateValue = {clothingColor: e}
    //     setAvatar(item => ({
    //         ...item,
    //         ...updateValue
    //     }))
    // }

    return(
        <C.Container>
            <div className='form'>
                <h3>Avatar SeuBoné</h3>
                <label> Corpo
                    <select name="body" onChange={e => setBody(e.target.value)}>
                        <option value="chest">Peito</option>
                        <option value="breasts">Peitos</option>
                    </select>
                </label>
                <label> Ton da pele
                    <select name="body" onChange={e => setSkinTone(e.target.value)}>
                        <option value="black">Escura</option>
                        <option value="red">Avermelhada</option>
                        <option value="brown">Castanho</option>
                        <option value="light">Branco</option>
                        <option value="yellow">Amarelo</option>
                        <option value="dark">dark</option>
                    </select>
                </label>
                <label> Camisa
                    <select name="camisa" onChange={e => setClothingColor(e.target.value)}>
                        <option value="blue">Azul</option>
                        <option value="white">Branco</option>
                        <option value="black">Preto</option>
                        <option value="green">Verde</option>
                        <option value="red">vermelho</option>
                    </select>
                </label>
            </div>
            <div className='avatar'>
                <BigHead
                    accessory={accessory}
                    body={body}
                    circleColor='blue'
                    clothing={clothing}
                    clothingColor={clothingColor}
                    eyebrows={eyebrows}
                    eyes={eyes}
                    faceMask={false}
                    faceMaskColor="white"
                    facialHair={facialHair}
                    graphic="none"
                    hair={hair}
                    hairColor={hairColor}
                    hat="none"
                    hatColor="green"
                    lashes
                    lipColor={lipColor}
                    mask
                    mouth={mouth}
                    skinTone={skinTone}
                />
            </div>
        </C.Container>
    )
}