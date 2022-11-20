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
       border:a1?'1px solid white': '1px solid rgb(153,50,204)',
       borderRadius: '10px',
      
        height:'45px',
        width:'100%',
        backgroundColor: a1? "white" : 'rgb(204,204,255)',
     color:a1 ?'black':'rgb(153,50,204)'
     }}  > <TbLayoutDashboard/> Dashboard </button>  <br/>
  <br/>
  
  <button onClick={() =>{ h2();}} style={{
       border:a2?'1px solid white': '1px solid rgb(153,50,204)',
       borderRadius: '10px',
      
        height:'45px',
        width:'100%',
        backgroundColor:a2 ? "white" : 'rgb(204,204,255)',
     color:a2 ?'black':'rgb(153,50,204)'
     }} > <FaMedal/> Apprenterships</button>  <br/>
  <br/>
  <button onClick={h3} style={{
       border:a3?'1px solid white': '1px solid rgb(153,50,204)',
       borderRadius: '10px',
      
        height:'45px',
        width:'100%',
        backgroundColor:a3? "white" : 'rgb(204,204,255)',
     color:a3 ?'black':'rgb(153,50,204)'
     }}><HiOutlineBookOpen/> Internships</button>  <br/>
  <br/>
  <button onClick={h4} style={{
       border:a4?'1px solid white': '1px solid rgb(153,50,204)',
       borderRadius: '10px',
      
        height:'45px',
        width:'100%',
        backgroundColor:a4 ? "white" : 'rgb(204,204,255)',
     color:a4 ?'black':'rgb(153,50,204)'
     }}> <TbBriefcase/> Jobs </button>  <br/>
  <br/>
  <button onClick={h5} style={{
       border:a5?'1px solid white': '1px solid rgb(153,50,204)',
       borderRadius: '10px',
      
        height:'45px',
        width:'100%',
        backgroundColor:a5 ? "white" : 'rgb(204,204,255)',
     color:a5 ?'black':'rgb(153,50,204)'
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
    
  <button   style={{border: '1px solid purple',borderRadius: '10px',
     padding:'px',
     height:'33px',
     backgroundColor: 'rgb(127,0,255)',
     color:'white'
     }}  > <CgAddR/> Create New Internship </button>  <br/>
  </div>
  
<div  >

  <article>
    <div style={{
      border: '1px solid rgb(237,226,239)',
      borderRadius: '10px',
     float: 'right',
      float: 'right',
     width: '30%',
     width: '300px',
     boxsizing: 'border-box',
     backgroundColor: 'rgb(242,238,243)'
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
  <div  style={{  backgroundColor: 'rgb(224,224,224)',
  display:'flex',
    flex:1,
    height:'50px',
   flexdirection:'row-reverse',
   border: '1px solid rgb(226,226,226)',
       borderRadius: '10px',
   justifyContent:'space-between'
   }}>
    <div style={{padding:'6px'}}>
     <button onClick={handleClick} style={{
       border:active?'1px solid white': '1px solid purple',
       borderRadius: '10px',
        padding:'2px',
        height:'35px',
        width:'75px',
        backgroundColor:active ? "white" : 'rgb(127,0,255)',
     color:active ?'black':'white'
     }} >  This week </button> 
&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={handleClick} style={{ border: '1px solid purple',
    borderRadius: '10px',
     padding:'2px',
     height:'35px',
     width:'75px',
     backgroundColor:active ?  'rgb(127,0,255)' : 'white',
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
       borderRadius: '10px',
      width:'105px',
        height:'35px',
        backgroundColor:'white',
        color:'black'
       
     }}  ><div style={{display:'flex',
     flex:1,
     
    flexdirection:'row-reverse'}}><div style={{color:'rgb(153,50,204)'}}> <MdOutlineDateRange/> </div><div>Select dates</div></div> </button>  
 </div>
 
  </div>
  <div style={{  
  display:'flex',
    flex:1,
   flexdirection:'row-reverse'
   }} >
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/00.png'/>
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/10.png'/>
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/211.png'/>
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/30.png'/>
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/40.png'/>
  <img src='https://cdn.jsdelivr.net/gh/olaru-miruna-paraschiva-30127/react-hnjjf3@main/50.png'/>

  </div>
    
   </div>
    
    
  </article>
 
  </div>
  
  <div>
   <article style={{  
     border: '1px solid rgb(230,231,243)',
  backgroundColor:'rgb(230,231,243)',
   height:'50px'
   }} >
<div style={{  
  display:'flex',
   flexdirection:'row-reverse',
   flex:1,
   justifyContent:'space-between'
   }} >
    <div style={{  
  
    
  
  width:'250px'
   
   }}>Internship Title </div>
    <div style={{  
  display:'flex',
   flex:1,
   
   flexdirection:'row-reverse'
   }}>
     <div style={{display:'flex',
     flex:1,
     
    flexdirection:'row-reverse'}}>
   <div style={{color:'rgb(204,153,255)'}} ><BsCheck2Square/></div> &nbsp;&nbsp;&nbsp;&nbsp; <div>Completion  Period</div></div>
  <div style={{display:'flex',
     flex:1,
     
    flexdirection:'row-reverse'}} >  <div style={{color:'rgb(204,153,255)'}} ><BsCheck2Square/></div> &nbsp;&nbsp;&nbsp;&nbsp; <div> Total Enrolled </div></div>
    <div style={{display:'flex',
     flex:1,
     
    flexdirection:'row-reverse'}}><div style={{color:'rgb(204,153,255)'}} ><BsCheck2Square/></div> &nbsp;&nbsp;&nbsp;&nbsp;<div> Qualified Candidates </div></div>
    <div style={{color:'rgb(204,153,255)'}}><BsCheck2Square/>&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
   </div>
     </div>
    
   </article>
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
     <p style={{backgroundColor:'rgb(222,222,255)',color:'rgb(153,50,204)',width:'75px',height:'37px',padding:'11px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
    
     <div>
     <p style={{backgroundColor:'rgb(222,222,255)',color:'rgb(153,50,204)',width:'75px',height:'37px',padding:'11px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
    
     <div>
     <p style={{backgroundColor:'rgb(222,222,255)',color:'rgb(153,50,204)',width:'75px',height:'37px',padding:'11px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
    
     <div>
     <p style={{backgroundColor:'rgb(222,222,255)',color:'rgb(153,50,204)',width:'75px',height:'37px',padding:'11px', borderRadius: '5px'}}>20,000</p>
     </div>
     <br/>
   
     <div>
     <p style={{backgroundColor:'rgb(222,222,255)',color:'rgb(153,50,204)',width:'75px',height:'37px',padding:'11px', borderRadius: '5px'}}>20,000</p>
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
  color:'rgb(153,50,204)',
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
  color:'rgb(153,50,204)',
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
  color:'rgb(153,50,204)',
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
  color:'rgb(153,50,204)',
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
  color:'rgb(153,50,204)',
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

