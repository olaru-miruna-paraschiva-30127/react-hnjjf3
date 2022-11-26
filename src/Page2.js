import React from "react";
import "./style.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsCircle} from "react-icons/bs";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
export default function Page2() {
  return (
    <div>
      <article style={{  
    width:"100%",
   height:'60px',
   boxShadow: '1px 2px 9px lightgray',
   justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse',
  
   }}>
     <button style={{ backgroundColor:'white',
   border:'white',height:'20px'}} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}><div style={{color:'rgb(127,0,255)'}}><AiOutlineArrowLeft/></div>&nbsp; <div>Back</div></div></button>
  <div style={{fontWeight:'bold',fontSize:"25px"}}>Add New Internship</div>
   <button style={{height:'25px',
   color:'gray',
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
   borderRadius:'8px'
  }} >
       <div style={{display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   justifyContent:'space-between'}}> <div>Continue to Next Step</div>&nbsp;<div><AiOutlineArrowRight/> </div></div></button>
        </article>
       
        <div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'80px'
      }}>
 </div>
 
 <article style={{width:'100%',
 height:'50px',
 backgroundColor:'rgb(230,231,243)',
 border:'1px solid lightgray',
 justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse',
   fontSize:"13px"
}}>
<div ><BsCircle/>&nbsp;Internship Description</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Internship Guide</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Surveys</div>
<div style={{color:'rgb(190,190,190)'}}><BsCircle/>&nbsp;Settings</div>
</article>
<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'85px'
      }}>
 </div>
<article style={{ float: 'left', width:'45%', backgroundColor:'rgb(230,231,243)',border:'rgb(230,231,243)',height:'660px'}}>
<div style={{width:'100%'}}>
  <div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Category</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Description</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Location</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Benefits</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Intro Video</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>


<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>
   
<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Mentor Details</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Recommended Roles</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}><div><div style={{width:"100%",
   backgroundColor:'rgb(230,231,243)',
   border:'rgb(230,231,243)',
  height:'20px'
   }}>
</div><CiTextAlignJustify/></div>&nbsp;&nbsp;<button style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   borderRadius:'8px'}}><div>Web Links & Resources</div><div style={{color:'gray'}}><MdPlayArrow/></div></button></div>

<div style={{width:"100%",
      backgroundColor:'rgb(230,231,243)',
      border:'rgb(230,231,243)',
     height:'15px'
      }}>
 </div>

<div style={{width:'100%',height:'55px' ,justifyContent:'space-between',
   display:'flex',
    flex:1,
   flexdirection:'row-reverse'}}>
     <button style={{width:'100%',height:'55px',
   padding:'18px',
  color:'rgb(127,0,255)',
   backgroundColor:'rgb(230,231,243)',
   border:'2px solid pink',
   borderStyle:'dashed',
   borderRadius:'8px',borderColor:'rgb(127,0,255)'}}><BsPlusSquare/>&nbsp;&nbsp;&nbsp;Add More</button></div>
   </div>
</article>
    </div>
  );
}