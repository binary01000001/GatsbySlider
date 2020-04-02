import React from 'react'

function LayoutThree() {
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', userSelect: 'none' }}>
      <div style={{ width: '100%', padding: '20px 20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#3BBAC8' }}>Nota:</div>
      </div>
      <div style={{ width: '100%', padding: '0px 20px 0px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'scroll', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
          Si desconoces el proceso para validar tu cuenta de correo, comunícate con nuestra área de servicio a cliente.
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', padding: '20px', position: 'absolute', bottom: '0px' }}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', /* border:'1px solid blue', */ padding: '20px', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#3BBAC8' }}>Alfredo Arreola</div>
          <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#072B48' }} >Gerente Atención a Clientes</div>
          <a href="tel:044-55-76-15-47-68">(55) 6792 2318</a>
          <a href = "mailto:alfredo@sfleet.mx?subject = Feedback&body = Message">
            alfredo@sfleet.mx
          </a>
        </div>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', /* border:'1px solid blue', */ padding: '20px', textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#3BBAC8' }}>Camila Arreola</div>
          <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#072B48' }}>Ejecutivo Atención a Clientes</div>
          <a href="tel:044-55-76-15-47-68">(55) 8842 7643 ext. 203</a>
          <a href = "mailto:camila@sfleet.mx?subject = Feedback&body = Message">
            camila@sfleet.mx
          </a>
        </div>
      </div>
    </div>
  )
}

export default LayoutThree