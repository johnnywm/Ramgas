

import React from "react";

import Slide1 from "./slidecont1"
import Slide2 from "./slidecont2"
import Slide3 from "./slidecont3"
import Contacto from "./subcompo/modalhook"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Animate } from "react-animate-mount";


// Change the slide transition type.

// try translate, scale, blur, rotate

// Change it to true to add an appear transition that fades the image in from grayscale to full color.





class Carousel extends React.Component{

  
    
   state = {
      counter: 0,
      loaded: false, 
      contacto:false,
      cont1:false,
      flechas:true
      
    };

 items=[<Slide1 key="ab1" />,<Slide2 key="ab2" />,<Slide3 key="ab3" />]

   
 


  
  prevSlide(){
    var prevSlide = this.state.counter - 1 < 0 ? this.props.slides.length - 1 : this.state.counter - 1;
    this.setState({
      counter: prevSlide
    })    
  }
  
  nextSlide=()=>{
    
    var nextSlide = this.state.counter + 1 <  this.items.length  ? this.state.counter + 1 : 0;
    this.setState({
      counter: nextSlide
    })
  }

  
  

  

  componentDidMount() {
  
    this.setState({loaded:true})
    console.log("los elementos han sido cargados ")
 
 this.timingset = setInterval(()=>{
      if(!this.state.workingon){
      
      this.flechaderecha()
      
    }
    
    }, 15000)
 }

 componentWillUnmount(){
  clearTimeout(this.timingset);

  
}

flechaderecha=()=>{
  if(!this.state.workingon){
this.setState({workingon:true})
  var nextSlide = this.state.counter + 1 < this.items.length  ? this.state.counter + 1 : 0;
  console.log(nextSlide+"nextSlide")
  this.setState({
    counter: nextSlide, workingon:false
  })
   
  }

 
  }
flechaizquierda=()=>{
  if(!this.state.workingon){
    this.setState({workingon:true})
    var prevSlide = this.state.counter - 1 < 0 ? this.items.length  - 1 : this.state.counter - 1;
    this.setState({
      counter: prevSlide, workingon:false
    })    
 
  }
  
}



flecharetro=()=>{
  this.setState({contacto:false, flechas:true})
}


  render(){
    
console.log(this.state.counter)




    return(

      <div className="mycarousel backgroudit2 " >
           <Animate show={this.state.contacto}>
<Contacto flecharetro={this.flecharetro}/>
</Animate>
     
        <div className="barrainforma" style={{top: "30px"}}>
        <div className="barra">
      
        </div>
        </div>
      
         
<Animate show={this.state.flechas}>
        <div className="flechamovimiento izquierda" onClick={this.flechaizquierda}>
{"<"}
        </div>
        <div className="flechamovimiento derecha" onClick={(e)=>{e.stopPropagation();this.flechaderecha()}}>
        {">"}    
        </div>
        </Animate>
       <div className="Slider">
       <TransitionGroup>
    <CSSTransition  timeout={{
 appear: 200,
 enter: 300,
 exit: 500,
}}classNames="cont1Anim">
      <div  index={this.state.counter} key={this.state.counter} >
        {this.items[this.state.counter]}
        </div>
      </CSSTransition>
       </TransitionGroup>
       </div>
     
    
       
        
      <style jsx>{`
        .barrainforma{
          position: absolute;
    height: 20px;
    width: 100%;
   
    
    z-index: 20;

        }
        .barra{
          height: 20%;
          background: #2e59dc;
          box-shadow: 0px 1px 1px white;
    border-radius: 0px 15px 15px 0px;
    width: 1%;
    animation-name: example;
    animation-duration: 15s;
   
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;

        }
         .barra-active{
          height: 50%;
    background: #e9180a;
    border-radius: 0px 15px 15px 0px;
    width: 100%;
    transition:5s

        }
        @keyframes example {
  0%   {width: 0.5%}
  100%  {width: 100%}

}
        
        `}</style>


      </div>
     
    )
  }
}

export default Carousel


