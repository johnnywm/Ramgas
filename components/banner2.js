import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HandshakeIcon from '@mui/icons-material/Handshake';


function banner2() {
    return ( <div className='contFlex darkBack banner2' >
<div className='contClaveValor'>

<div className='claveIco'>
    <HandshakeIcon style={{color:"#8a0916",fontSize:"90px"}}   />
</div>
<div className='valorIco'>

<h2>Confianza </h2>
<p>Mas de 30 años de experiencia Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</div>
<div className='contClaveValor'>

<div className='claveIco'>
    <LocalShippingIcon style={{color:"rgb(207 55 45)",fontSize:"90px"}}   />
</div>
<div className='valorIco'>

<h2>Delivery </h2>
<p>Recibe nuestros servicios en la comodidad de tu hogar, Lorem ipsum dolor sit amet, consectetur adipiscing elit, . </p>
</div>
</div>
<div className='contClaveValor'>

<div className='claveIco'>
    <GppGoodIcon style={{color:"#8a0916",fontSize:"90px"}}  />
</div>
<div className='valorIco'>

<h2>Seguridad </h2>
<p>Sistema de seguridad integral, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
</div>
</div>
<div className='contClaveValor'>

<div className='claveIco'>
    <ManageAccountsIcon style={{color:"rgb(207 55 45)",fontSize:"90px"}}  />
</div>
<div className='valorIco'>

<h2>Logistica </h2>
<p>Manejamos, organizamos y gestionamos de forma optima , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
</div>
</div>

    </div> );
}

export default banner2;