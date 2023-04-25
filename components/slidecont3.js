import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Animate from 'react-animate-mount/lib/Animate';
import dynamic from 'next/dynamic'


const Contacto = dynamic(() => import('./subcompo/modalhook'), {
    loading: () => 'Loading...',
  })

export default  function Slide3() {

    const [contacto, setContacto] = useState(false)



    return (  

        <div className='fondoPrincipal'>

<Image src="/terceraimg.png" 
alt="Large Image" 
priority={true}
 
fill
className='fondoimagenSlide3'


/>
<div className="contGeneral">
    <div className="subContGeneralSlide2"> 
<div className="textanim3">
    <div className="fondobanimSlide2">
 
    <span className="subtext3"> 
    <Image src="/manosagilita.png" 
    width={100}
    height={100}
    />
    <p>Agilita el proceso de facturación generando un <span className='enfasistext'>Código QR</span></p>
    
    </span>
    </div>
    </div>

<div className="textanim2Slide2"> 
    <p >
       Imprímelo y enseñalo a tu distribuidor
    </p>
   
    <button onClick={()=>{setContacto(true)}}   className="botoncontact enfasis">Generalo Aquí  &gt; </button>
    </div>

    </div>

    </div>
<div className='contArrow'>
    <a className="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
    </div>

    <Animate show={contacto}>
<Contacto onFlechaRetro={()=>{setContacto(false)}} />
    </Animate>
    <style>
        {
        `
        .fondobanimSlide2{
            border-radius: 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    height: 300px;
    align-items: flex-start;
        }
        .textanim3 {
            position: relative;
            text-align: center;
            animation-name: mainani;
            animation-duration: 3s;
            animation-delay: 2s;
            animation-fill-mode: both;
            margin-top: 80px;
        }
         .subContGeneralSlide2{
                width: 90%;
    font-family: "Bitter";
    height: 96%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
         }
         .textanim2Slide2 {
            position: relative;
            font-size: 30px;
            font-weight: 100;
            text-align: center;
            border-radius: 15px;
            color: black;
            padding: 17px;
            margin-bottom: 80px;
            background: #f5f5f5eb;
            font-family: sans-serif;
            max-width:500px;
        }
         .subtext3{

            margin: 0;
            color: #000000;
            /* text-decoration: underline; */
            font-size: 30px;
            background: rgba(255, 255, 255, 0.9098039216);
            padding: 11px;
            /* margin-top: 26px; */
            border-radius: 29px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 300px;
            width: 50%;
            flex-flow: column;
         }
         .fondoimagenSlide3{
            object-fit:cover;
           
        }
       
         @media screen and (max-width: 700px) {
            .fondoimagenSlide3{
                object-fit:cover;
                object-position: 63%;
            }
         }

        `}

    </style>
        </div>
    );
}

