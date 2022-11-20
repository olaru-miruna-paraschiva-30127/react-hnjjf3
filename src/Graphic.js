
import {Bar} from 'react-chartjs-2';
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Graphic(){
  return(
    <div  style={{height:'85px',width:'200px',padding:'3px'}}>
  <Bar
  
          data={{labels: ['', '', '',
          '', ''],
 datasets: [
   { 
     label: '',
     backgroundColor: 'rgb(127,0,255)',
     
     
     data: [65, 59, 80, 81, 56]

   }
 ]}}
          options={{
            
           
            
          }}
        />
        
        </div>
  );

}