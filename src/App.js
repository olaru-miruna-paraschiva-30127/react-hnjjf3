import React from "react";
import "./style.css";
import { BsCheck2Square} from "react-icons/bs";
import {CgAddR} from "react-icons/cg";
import {MdOutlineDateRange} from "react-icons/md";
import {Bar} from 'react-chartjs-2';
import Graphic from './Graphic';
import Graphic1 from './Graphic1';

export default function App() {
  
  return (
    <div>
 

  <nav>
  <button > Show Less </button>  <br/>
  <button > Show Less </button>  <br/>
  <button > Show Less </button>  <br/>
  <button > Show Less </button>  <br/>
  <button > Show Less </button>  <br/>
  </nav>
  
  <div  style={{ display:'flex',
   flexdirection:'row',
  float: 'left',

  width: '8%',
  boxsizing: 'border-box'
  }}>
    
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internships </h1> </div>
  <div style={{ display:'flex',
   flexdirection:'row',
  float: 'right',
  padding: '20px',
  width: '27%',
  boxsizing: 'border-box'
  
  }}>
    
  <button   style={{border: '1px solid purple',borderRadius: '5px',
     padding:'2px',
     height:'33px',
     backgroundColor: 'rgb(191,0,255)',
     color:'white'
     }}  > <CgAddR/> Create New Internship </button>  <br/>
  </div>
  
<div  >

  <article>
    <div style={{
      border: '1px solid rgb(220,208,255)',
      borderRadius: '5px',
     float: 'right',
      float: 'right',
     width: '30%',
     width: '300px',
     boxsizing: 'border-box',
     backgroundColor: 'rgb(220,208,255)'
  }}>
      <h3>Internship Insights</h3>
      <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in wicg knowledge about space can be both a prori ans synthetic.</p>
      </div>
      <div style={{backgroundColor: 'white',
     float: 'right',
   
     width: '20px',
     boxsizing: 'border-box'
  }}>
    </div>
    <div style={{ float: 'right',
  width: '70%'}}>
  <div  style={{  backgroundColor: 'rgb(206,200,239)',
    display:'flex',
   flexdirection:'row',
   border: '1px solid rgb(206,200,239)',
       borderRadius: '5px',
   width: '100%',
   boxsizing: 'border-box'
   }}>
    <div style={{padding:'20px'}}>
     <button style={{
       border: '1px solid purple',
       borderRadius: '5px',
        padding:'2px',
        height:'35px',
        width:'75px',
        backgroundColor: 'rgb(191,0,255)',
     color:'white'
     }} >  This week </button> 
 </div>
 <div style={{padding:'20px'}}>
    <button  style={{ border: '1px solid purple',
    borderRadius: '5px',
     padding:'2px',
     height:'35px',
     width:'75px',
     backgroundColor: 'rgb(191,0,255)',
     color:'white'
     }} >  This month</button>  
    </div>
    <div style={{ display:'flex',
   flexdirection:'row',
  float: 'right',
 
  padding: '20px',
  marginRight:'0.5px'
  }} >
  <button style={{
       border: '1px solid purple',
       borderRadius: '5px',
      width:'105px',
        height:'35px',
        backgroundColor: 'rgb(191,0,255)',
     color:'white'
       
     }}  > <MdOutlineDateRange/> Select dates </button>  
 </div>
  </div>
  
  <div style={{}}>
    <Graphic1/>
    </div>
   </div>
    
    
  </article>
 
  </div>
  
  <div>
   <aside>
   <BsCheck2Square/>
   </aside>
     </div>
   <div>
     <article>
       </article>
     </div>
   
   
    </div>
  );
}

