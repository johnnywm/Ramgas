import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Animate from 'react-animate-mount/lib/Animate';
import dynamic from 'next/dynamic'


const Contacto = dynamic(() => import('../components/subcompo/modalhook'), {
    loading: () => 'Loading...',
  })

export default  function Slide1() {

    const [contacto, setContacto] = useState(false)



    return (  

        <div className='fondoPrincipal'>

<Image src="/fondocortado.png" 
alt="Large Image" 

priority={true}
fill
className='fondoimagen'


/>
<div className="contGeneral">
    <div className="subContGeneral"> 
<div className="textanim1">
    <div className="fondobanim">
    <h1 className="maintext">Compra Gas</h1>
    <span className="subtext">en 3 clicks!</span>
    </div>
    </div>


    <h2 className="textanim2">
       Solo Activa tu GPS e ingresa tus datos
    </h2>
    
    <div className="bannerbotones">
    
    <button onClick={()=>{setContacto(true)}}   className="botoncontact enfasis">Empieza &nbsp;&nbsp; &gt; </button>
    
     
    </div>
    </div>

    </div>
<div className='contArrow'>
    <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
    </div>

    <Animate show={contacto}>
<Contacto onFlechaRetro={()=>{setContacto(false)}} />
    </Animate>
        </div>
    );
}

