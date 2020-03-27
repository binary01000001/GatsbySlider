import React from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import {
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
} from './styles.js'
function HeaderAlert() {
  return (
    <F>
      <Image>
        <img src={require('../images/hello.svg')} height="auto" width="125px" />
      </Image>
      <Person>
        <img src={require('../images/Person.svg')} height="auto" width="145px" />
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
        <RightOutlined style={{ fontSize: '20px', color: '#08c' }} />
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