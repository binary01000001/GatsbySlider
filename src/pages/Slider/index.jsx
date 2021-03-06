import React, { useState, useEffect } from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import LayoutOne from './Layout1'
import LayoutTwo from './Layout2'
import LayoutThree from './Layout3'
import {
  SliderContainer,
  CircleClose,
  CircleLeft,
  CircleRight
} from './styles.js'
function Slider() {
  const [position, setPosition] = useState(0)
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRight, setActiveRight] = useState(true)
  const [show, setShow] = useState('')
  const arrayRelease = [
    {
      type: 'layout1',
      title: 'Comunicado Administradores',
      paragraphs: [
        "En S·Fleet nos estamos renovando para ti",
        "Ahora también podrás autorizar servicios desde tu correo electrónico, desde cualquier lugar, hora y cualquier dispositivo.",
        "Si tu cuenta de correo de acceso a la plataforma está validada recibirás un mail cuando el proveedor cargue el presupuesto de los servicios solicitados.",
        "Te indicaremos nombre de los servicios solicitados, cantidad y monto de los mismos; también te indicaremos hace cuántos km y meses se realizó un concepto igual al solicitado y el número de folio para que des seguimiento en go.sfleet.mx."
      ]
    },
    {
      type: 'layout2',
      image: '../../../images/example.png',
    },
    {
      type: 'layout3',
      note: 'Si desconoces el proceso para validar tu cuenta de correo, comunícate con nuestra área de servicio a cliente.',
      contacts: [
        {
          name: 'Gloria Barrios',
          workstation: 'Gerente Atención a Clientes',
          phone: '(55) 6792 2318',
          email: 'gloria@sfleet.mx',
        },
        {
          name: 'Camila Arreola',
          workstation: 'Ejecutivo Atención a Clientes',
          phone: '(55) 8842 7643 ext. 203',
          email: 'jose.jimenez@sfleet.mx',
        }
      ]
    }
  ]
  useEffect(() => {
    loader(position)
  }, [])
  
  const loader = (value) => {
    setShow(arrayRelease[value].type === 'layout1' ? <LayoutOne release={arrayRelease[value]} /> : arrayRelease[value].type === 'layout2' ? <LayoutTwo release={arrayRelease[value]} /> : <LayoutThree release={arrayRelease[value]} />)
  }
  function showLayout(direction) {
    debugger
    let counter = position
    if (direction === 'left') {
      if(position !== 0){
        counter = counter -1
        setPosition(counter)
        setActiveLeft(true)
      }
    } else {
      if(position < (arrayRelease.length-1)){
        counter = counter  + 1
        setPosition(counter)
      }
    }
    counter === 0 ? setActiveLeft(false) : setActiveLeft(true)
    counter === (arrayRelease.length-1) ? setActiveRight(false) : setActiveRight(true)
    position !== counter && setShow(arrayRelease[counter].type === 'layout1' ? <LayoutOne release={arrayRelease[counter]} /> : arrayRelease[counter].type === 'layout2' ? <LayoutTwo release={arrayRelease[counter]} /> : <LayoutThree release={arrayRelease[counter]} />)
  }
  return (
    <SliderContainer>
      <CircleClose />
      <CircleLeft active={activeLeft} onClick={() => showLayout('left')}>
        <LeftOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleLeft>
      <CircleRight active={activeRight} onClick={showLayout}>
        <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleRight>
      {show}
    </SliderContainer>
  )
}
export default Slider