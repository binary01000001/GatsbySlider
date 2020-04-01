import React from 'react'

function LayoutTwo() {
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', userSelect: 'none' }}>
      <div style={{ width: '100%', padding: '20px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position:'relative' }}>
        <div style={{position:'absolute', left:'40px', top:'15px'}}>
          <img src={require('../../../images/Search.svg')} alt="Persona con un megafono" style={{ height: 'auto', width: '35px', marginBottom: '0px' }} />
        </div>
        <div style={{fontWeight:'bold', fontSize:'18px', color:'#3BBAC8'}}>Te indicamos los pasos:</div>
      </div>
      <div style={{ width: '100%', padding: '0px 20px 0px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '515px', overflow: 'scroll' }}>
          <img src={require('../../../images/example.png')} alt="Persona con un megafono" style={{ height: 'auto', width: '85%', marginBottom: '0px' }} />
        </div>
      </div>
    </div>
  )
}

export default LayoutTwo