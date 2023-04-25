import Image from 'next/image';

export default function example() {

    return(<div className='contWhite'>


        <div className='contimage'>
        <div className="contTexto ">
        <h1 className=' customtitle'>Concentrados en ofrecerte el mejor Servicio</h1>
        <p className='jwlowpadding descripcionproducts customSubtitle'>Capacitamos constantemente a nuestro personal en</p>

<a href="#" className="buttonseller marginRight">Saber más</a>
		</div>

        </div>
          <style jsx>{`
          .marginRight{
            margin-right: 10px;
          }
            .customSubtitle{
              background: white;
              border-radius: 10px;
              text-align: right;
              max-width: 250px;
              padding: 10px;
              margin-right: 10px;
          
            }
          .customtitle{
            background: #ffffffcf;
            border-radius: 28px;
            text-align: right;
            max-width: 300px;
            padding: 10px;
            margin-right: 10px;
           
          }
          .contTexto{
            display:flex;
            flex-flow: column;
          
    align-items: flex-end;
    width: 100%;
          }
          .contWhite{
            background: white;
            height: 900px;
            position: relative;
            z-index: 3;
            padding-top: 150px;
          }

 `}
</style>
    </div>)
}