import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react'
import { Animate } from 'react-animate-mount/lib/Animate';
import HomeIcon from '@mui/icons-material/Home';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import BookIcon from '@mui/icons-material/Book';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
export default function Navbar() {

    const [isOpen, setOpen] = useState(false)

    const [isMobile, setMobile] = useState(false)

const isMobileVerify = ()=>{
    if(window.document.body.clientWidth >= 800){
        setMobile(false)
       
      } else if(window.document.body.clientWidth < 800){
        setMobile(true)
      }
}

useEffect(()=>{
isMobileVerify()
  
window.addEventListener('resize',()=>{
      
    isMobileVerify()
     })
})

 


let NavContButtons;

if(isMobile  && !isOpen){

  NavContButtons = "menu-close"
}

else if(isMobile && isOpen){

  NavContButtons = "menu-extended"
}
else{
    NavContButtons = "displayNone" 
}




console.log(isMobile)

    return ( 
        <div className="contNav">
        <div className="fondoNav">
          
<Image src="/ramgaslogo.png" 
alt="logo" 

height={55}
width={220} 


/>
<div className="navLeftSide">
<Animate show={isMobile}>
<div className='contHamburger'>
<Hamburger toggled={isOpen} toggle={setOpen} 
color="black"
size={50}/>
</div>
</Animate>
<div className="menu-desktop">
<Animate show={!isMobile}>

<ul>
    <li className="newli">
        <HomeIcon />
   Empresa 
    </li>
    <li>
 Productos
    </li>
    <li>
   Articulos
    </li>
    <li>
   Contactanos
    </li>
    
</ul>

   
    </Animate>
    </div>
    </div>
    </div>
    <div className={NavContButtons}>
<ul>
    <li>
    <HomeIcon />
   <p>Empresa</p>
    </li>
    <li>
    <PropaneTankIcon />
    <p>Productos</p>
 
    </li>
    <li>
    <BookIcon />
    <p>Blog</p>
   
    </li>
    <li>
    <PhoneForwardedIcon />
    <p>Contactanos</p>
   
    </li>
    
</ul>

    </div>
    </div>
   
  
    );
}

