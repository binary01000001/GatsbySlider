import React from 'react'
import {
  TitleAlert,
  Title,
  Arrow,
  Container,
  Image,
  Person,
} from '../styles.js'

function LayoutOne(props) {
  console.log(props.release)
  const listItems = props.release.paragraphs.map((item, key) =>
    <p key={key} style={{ textAlign: 'justify' }}>
      {item}
    </p>
  );
  return (
    <>
      <Image>
        <img src={require('../../../images/hello.svg')} alt="Persona con una laptop" style={{ height: 'auto', width: '125px' }} />
      </Image>
      <Person>
        <img src={require('../../../images/Person.svg')} alt="Persona con un megafono" style={{ height: 'auto', width: '145px' }} />
      </Person>
      <TitleAlert>
        <Title>{props.release.title}</Title>
        <Arrow />
      </TitleAlert>
      <Container>
        {listItems}
      </Container>
    </>
  )
}

export default LayoutOne