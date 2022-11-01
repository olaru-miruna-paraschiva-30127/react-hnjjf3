
import {Bar} from 'react-chartjs-2';
import React from "react";
export default function Graphic(){
  return(
    <div  style={{height:'100px',width:'200px',padding:'3px'}}>
  <Bar
          data={{labels: ['January', 'February', 'March',
          'April', 'May'],
 datasets: [
   {
     label: 'Rainfall',
     backgroundColor: 'rgba(75,192,92,1)',
     borderColor: 'rgba(0,0,0,1)',
     borderWidth: 2,
     data: [65, 59, 80, 81, 56]

   }
 ]}}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        
        </div>
  );

}