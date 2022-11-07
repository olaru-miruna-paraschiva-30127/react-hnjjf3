import React from "react";
import "./style.css";
import { BsCheck2Square} from "react-icons/bs";
import {CgAddR} from "react-icons/cg";
import {MdOutlineDateRange} from "react-icons/md";
import Graphic1 from './Graphic1';
import Graphic from './Graphic';
import React, { useState } from "react";
import {TbLayoutDashboard} from "react-icons/tb";
import {FaMedal} from "react-icons/fa";
import {HiOutlineBookOpen} from "react-icons/hi";
import {TbBriefcase} from "react-icons/tb";
import {FiSettings} from "react-icons/fi";
import {VscGraph} from "react-icons/vsc";
import {BsPeople} from "react-icons/bs";
import {TbCircles} from "react-icons/tb";

export default function App() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [active1, setActive1] = useState(false);
  const handleClick1 = () => {
    setActive1(!active1);
  };
  const [a1, sA1] = useState(true);
  const h1 = () => {
    sA1(!a1);
  };
  const [a2, sA2] = useState(true);
  const h2 = () => {
    sA2(!a2);
  };
  const [a3, sA3] = useState(true);
  const h3 = () => {
    sA3(!a3);
  };
  const [a4, sA4] = useState(true);
  const h4= () => {
    sA4(!a4);
  };
  const [a5, sA5] = useState(true);
  const h5 = () => {
    sA5(!a5);
  };
  const text = 'Name';
  const date = 'Date';
  return (
    <div>


  <nav>
  <div>
   <h1> RadicalX</h1>
   <br/>
  <button onClick={() =>{ h1();}} style={{
       border:a1?'1px solid white': '1px solid purple',
       borderRadius: '5px',
      
        height:'45px',
        width:'120px',
        backgroundColor: a1? "white" : 'rgb(221,160,221)',
     color:a1 ?'black':'white'
     }}  > <TbLayoutDashboard/> Dashboard </button>  <br/>
  <br/>
  
  <button onClick={() =>{ h2();}} style={{
       border:a2?'1px solid white': '1px solid purple',
       borderRadius: '5px',
      
        height:'45px',
        width:'120px',
        backgroundColor:a2 ? "white" : 'rgb(221,160,221)',
     color:a2 ?'black':'white'
     }} > <FaMedal/> Apprenterships</button>  <br/>
  <br/>
  <button onClick={h3} style={{
       border:a3?'1px solid white': '1px solid purple',
       borderRadius: '5px',
      
        height:'45px',
        width:'120px',
        backgroundColor:a3? "white" : 'rgb(221,160,221)',
     color:a3 ?'black':'white'
     }}><HiOutlineBookOpen/> Internships</button>  <br/>
  <br/>
  <button onClick={h4} style={{
       border:a4?'1px solid white': '1px solid purple',
       borderRadius: '5px',
      
        height:'45px',
        width:'120px',
        backgroundColor:a4 ? "white" : 'rgb(221,160,221)',
     color:a4 ?'black':'white'
     }}> <TbBriefcase/> Jobs </button>  <br/>
  <br/>
  <button onClick={h5} style={{
       border:a5?'1px solid white': '1px solid purple',
       borderRadius: '5px',
      
        height:'45px',
        width:'120px',
        backgroundColor:a5 ? "white" : 'rgb(221,160,221)',
     color:a5 ?'black':'white'
     }}> <FiSettings/> Settings </button>  <br/>
     <br/>
     <br/>
     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
     <br/> <br/> <br/> <br/> <br/> <br/> 
      <button style={{
       border:'1px solid white',
       borderRadius: '5px',
      backgroundImage:'',
        height:'45px',
        width:'45px',
        backgroundColor:"lightgray" ,
     
     }}></button> {text}

     </div>
  </nav>
  
  <div  style={{ display:'flex',
   flexdirection:'row',
  float: 'left',

  
  boxsizing: 'border-box',
 
  }}>
    <div style={{ display:'flex',
   flexdirection:'row-reverse',
  float: 'left',
  flex:'1',
  padding: 'px',
  
  boxsizing: 'border-box'
  
  }} >
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Internships </h1></div>
   </div>
  <div style={{ display:'flex',
   flexdirection:'row-reverse',
  float: 'right',
  flex:'1',
  padding: '10px',
  
  boxsizing: 'border-box'
  
  }}>
    
  <button   style={{border: '1px solid purple',borderRadius: '5px',
     padding:'px',
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
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
   border: '1px solid rgb(206,200,239)',
       borderRadius: '5px',
   justifyContent:'space-between'
   }}>
    <div style={{padding:'6px'}}>
     <button onClick={handleClick} style={{
       border:active?'1px solid white': '1px solid purple',
       borderRadius: '5px',
        padding:'2px',
        height:'35px',
        width:'75px',
        backgroundColor:active ? "white" : 'rgb(191,0,255)',
     color:active ?'black':'white'
     }} >  This week </button> 
&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={handleClick} style={{ border: '1px solid purple',
    borderRadius: '5px',
     padding:'2px',
     height:'35px',
     width:'75px',
     backgroundColor:active ?  'rgb(191,0,255)' : 'white',
     border:!active?'1px solid white': '1px solid purple',
     color:active? 'white':'black'
     }} >  This month</button>  
    </div>
    <div style={{ /*display:'flex',
   flexdirection:'row',
  float: 'right',
 
  padding: '20px',
  marginRight:'0.5px'*/
  padding: '6px'
  }} >
  <button  style={{
       border:'1px solid white',
       borderRadius: '5px',
      width:'105px',
        height:'35px',
        backgroundColor:'white',
        color:'black'
       
     }}  > <MdOutlineDateRange/> Select dates </button>  
 </div>
  </div>
  
  
    <Graphic1/>
    
   </div>
    
    
  </article>
 
  </div>
  
  <div>
   <aside>
   <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  
   justifyContent:'space-between'
   }}>
    <div>Internship Title </div>
   <div><BsCheck2Square/> Completion  Period</div>
    <div><BsCheck2Square/> Total Enrolled </div>
    <div><BsCheck2Square/> Qualified Candidates </div>
    <div><BsCheck2Square/>&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
     </div>
    
   </aside>
     </div>
   
     <article style={{height:'500px'}}>
 
     <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  
   justifyContent:'space-between'
   }}>
     <div>
     <div>
       <h4>Product Design GVI</h4>
       <p style={{fontSize:'10px',color:'gray'}}>
       Amet mimin mollit non deserunt
         <br/>est sit aliqua dolor do amet sint.
       </p>
      
     </div>
     <div>
   
       <h4>Product Design GVI</h4>
       <p style={{fontSize:'10px',color:'gray'}}>
       Amet mimin mollit non deserunt
         <br/>est sit aliqua dolor do amet sint.
       </p>
      
     </div>
     <div>
   
       <h4>Product Design GVI</h4>
       <p style={{fontSize:'10px',color:'gray'}}>
       Amet mimin mollit non deserunt
         <br/>est sit aliqua dolor do amet sint.
       </p>
       
     </div>
     <div>
   
       <h4>Product Design GVI</h4>
       <p style={{fontSize:'10px',color:'gray'}}>
       Amet mimin mollit non deserunt
         <br/>est sit aliqua dolor do amet sint.
       </p>
       
     </div>
     <div>
   
       <h4>Product Design GVI</h4>
       <p style={{fontSize:'10px',color:'gray'}}>
       Amet mimin mollit non deserunt
         <br/>est sit aliqua dolor do amet sint.
       </p>
       <br/>
     </div>
     </div>
     <div>
     <div>
     <h4>120 days</h4>
     <p style={{fontSize:'10px',color:'gray'}}>(created on {date})
     <br/>
     <br/>
     </p>
   </div>
   <div>
     <h4>120 days</h4>
     <p style={{fontSize:'10px',color:'gray'}}>(created on {date})
     <br/>
     <br/>
     </p>
   </div>
   <div>
     <h4>120 days</h4>
     <p style={{fontSize:'10px',color:'gray'}}>(created on {date})
     <br/>
     <br/>
     </p>
   </div>
   <div>
     <h4>120 days</h4>
     <p style={{fontSize:'10px',color:'gray'}}>(created on {date})
     <br/>
     <br/>
     </p>
   </div>
   <div>
     <h4>120 days</h4>
     <p style={{fontSize:'10px',color:'gray'}}>(created on {date})
     <br/>
     <br/>
     </p>
   </div>
   </div>
   <div>
   <div>
     <p style={{backgroundColor:'rgb(221,160,221)',color:'purple',width:'55px',height:'23px',padding:'3px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
     <br/>
     <div>
     <p style={{backgroundColor:'rgb(221,160,221)',color:'purple',width:'55px',height:'23px',padding:'3px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
     <br/>
     <div>
     <p style={{backgroundColor:'rgb(221,160,221)',color:'purple',width:'55px',height:'23px',padding:'3px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
     <br/>
     <div>
     <p style={{backgroundColor:'rgb(221,160,221)',color:'purple',width:'55px',height:'23px',padding:'3px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
     <br/>
     <div>
     <p style={{backgroundColor:'rgb(221,160,221)',color:'purple',width:'55px',height:'23px',padding:'3px', borderRadius: '5px'}}>20,000</p>
     </div>
     </div>
   <div>
     <Graphic/>
     <Graphic/>
     <Graphic/>
     <Graphic/>
     <Graphic/>
   </div>
   <div>
   <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  color:'purple',
  width:'100px',
  height:'100px',
   justifyContent:'space-between'
   }}> <VscGraph/><BsPeople/><TbCircles/>
     </div>
     <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  color:'purple',
  width:'100px',
  height:'100px',
   justifyContent:'space-between'
   }}> <VscGraph/><BsPeople/><TbCircles/>
     </div>
     <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  color:'purple',
  width:'100px',
  height:'100px',
   justifyContent:'space-between'
   }}> <VscGraph/><BsPeople/><TbCircles/>
     </div>
     <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  color:'purple',
  width:'100px',
  height:'100px',
   justifyContent:'space-between'
   }}> <VscGraph/><BsPeople/><TbCircles/>
     </div>
     <div  style={{  
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
  color:'purple',
  width:'100px',
  height:'100px',
   justifyContent:'space-between'
   }}> <VscGraph/><BsPeople/><TbCircles/>
     </div>
   
     </div>
   
     </div>
     
       </article>
    
   
   
    </div>
  );
}

