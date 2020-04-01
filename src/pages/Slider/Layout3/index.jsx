import React from 'react'

function LayoutThree() {
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ width: '100%', padding: '20px 20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#3BBAC8' }}>Nota:</div>
      </div>
      <div style={{ width: '100%', padding: '0px 20px 0px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'scroll', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          Si desconoces el proceso para validar tu cuenta de correo, comunícate con nuestra área de servicio a cliente.
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex' }}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>uno</div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>dos</div>
      </div>
    </div>
  )
}

export default LayoutThree