import React from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import styled from 'styled-components'
/* import {
  F,
  TitleAlert,
  Title,
  Arrow,
  CircleClose,
  Container,
  Image,
  Person,
  CircleLeft,
  CircleRight
} from './styles.js' */

const F = styled.div`
  height:600px;
  background:rgb(239, 241, 249);
  width:100%;
  position:relative;
  display:flex;
  justify-content:center;
`
const TitleAlert = styled.div`
  position:relative;
  width:100%;
  display:flex;
  height:auto;
`
const Title = styled.div`
  height:45px;
  color:#01A5B2;
  background:#072B48;
  left:-10px;
  width: 58%;
  top:25px;
  padding:10px 20px;
  font-weight:bold;
  position:absolute;
  display:flex;
  align-items:center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3);
`
const Arrow = styled.div`
  width: 0; 
  height: 0; 
  position:absolute;
  top:25px;
  left:calc(58% - 10px);
  border-left: 30px solid #072B48;
  border-top: 22.5px solid transparent;
  border-bottom: 22.5px solid transparent;
`
const CircleClose = styled.div` 
  height:30px;
  width:30px;
  background:white;
  border-radius:50%;
  position:absolute;
  top:-12px;
  right:-12px;
`
const Container = styled.div` 
  height:auto;
  width:90%;
  background:white;
  position:absolute;
  top:110px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding:20px 25px;
  border-radius:20px;
`
const Image = styled.div` 
  position:absolute;
  top:10px;
  right:15px;
  z-index:5;
`
const Person = styled.div` 
  position:absolute;
  bottom:-26px;
  left:14px;
  z-index:5;
`
const CircleLeft = styled.div`
  position:absolute;
  top:calc(50% - 30px);
  height:60px;
  width:60px;
  border-radius:50%;
  background:#072B48;
  z-index:6;
  left:-50px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  display:flex;
  align-items:center;
  justify-content:center;
`
const CircleRight = styled.div`
  position:absolute;
  top:calc(50% - 30px);
  height:60px;
  width:60px;
  border-radius:50%;
  /* background:#fff; */
  background:#072B48;
  z-index:6;
  /* right:-60px; */
  right:-50px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
`
function HeaderAlert() {
  return (
    <F>
      <Image>
        <img src={require('../images/hello.svg')} alt="Persona con una laptop" style={{ height: 'auto', width: '125px' }} />
      </Image>
      <Person>
        <img src={require('../images/Person.svg')} alt="Persona con un megafono" style={{ height: 'auto', width: '145px' }} />
      </Person>
      <TitleAlert>
        <Title>Comunicado Administradores</Title>
        <Arrow />
      </TitleAlert>
      <CircleClose />
      <CircleLeft>
        <LeftOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleLeft>
      <CircleRight>
        <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleRight>
      <Container>
        <p style={{ textAlign: 'justify' }}>
          En S·Fleet nos estamos renovando para ti
        </p>
        <p style={{ textAlign: 'justify' }}>
          Ahora también podrás autorizar servicios desde tu correo electrónico, desde cualquier lugar, hora y cualquier dispositivo.
        </p>
        <p style={{ textAlign: 'justify' }}>Si tu cuenta de correo de acceso a la plataforma está validada recibirás un mail cuando el proveedor cargue el presupuesto de los servicios solicitados. </p>
        <p style={{ textAlign: 'justify' }}>Te indicaremos nombre de los servicios solicitados, cantidad y monto de los mismos; también te indicaremos hace cuántos km y meses se realizó un concepto igual al solicitado y el número de folio para que des seguimiento en go.sfleet.mx.</p>
      </Container>
    </F>
  )
}
export default HeaderAlert