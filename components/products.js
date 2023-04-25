
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function ContProducts() {

    const slides = [
        { title: 'Cilindro de Gas', 
        description: 'Nuestro caracteristico cilindro azul, dispone de sellos de seguridad que garantiza un producto confiable y peso exacto', image:"/Products/cilindro.png",precio:"49.99"},
        { title: 'Valvula', description: 'De uso domestico para cilindros de gas ',
        image:"/Products/valvula.png",precio:"4.50"},
        { title: 'Valvula con Manometro', description: 'Posee un indicar de reserva, que muestra la cantidad exacta de gas existente en el cilindro. ',
        image:"/Products/reguladordomesticos.png",precio:"10"},
        { title: 'Duo Pack', description: 'Kit conformado por la valvula de uso domestico y una manguera de dos metros fabricada en un material resistente al GLP. Incluye 2 abrazaderas',
        image:"/Products/duopack.png",precio:"4.50"},
      ];
    return ( <div className=' whiteBack ContProducts' >

<div className='jwcontFlex jwcolumna  jwfull conttitulo'>
<p className='productStylesub jwlowmarginleft'>Nuestros </p>
<p className='  productStyle jwlowmarginleft'>Productos</p>
</div>

<Slider>
{slides.map((item, index) => (
	<div
		key={index}
		style={{ background: `no-repeat center center` }}
        className="jwContResponsive"  
	>
		<div className="center jwlowpadding ">
			<h1 className='jwlowpadding'>{item.title}</h1>
			<p className='jwlowpadding descripcionproducts'>{item.description}</p>
            <p className='jwlowpadding preciotext'>${item.precio}</p>
            <div className='conBotonflexend'> <button  className="mybutton">Comprar</button></div>
           
		</div>
        <div className="jwcontFlex"> 
            <img src={item.image} className="Productsimg jwlowpadding"></img>
        </div>
	</div>
))}
</Slider>

    </div> );
}

export default ContProducts;