
import React from "react";


import { Line } from "react-chartjs-2";
export const options = {
  scales: {
   yAxes: [{
       ticks: {
          display: false
        }
    }]
}
}
const data = {
  labels: ["Total Enrollements", "Completion", "Quallified Candidates", "Reached Out", "Interview Set", "Candidates Hired"],
  scales: {
    yAxes: [{
           display: "false"
     }]
 },
  datasets: [
    {
      label: "",
      data: [100000,65000, 850, 375, 300, 150],
      
    
      
      fill: true,
      backgroundColor: " rgb(127,0,255)",
      borderColor: "rgb(127,0,255)"
    }
  ]
};
 
export default function Graphic1() {
  return (
    <div className="Graphic1" style={{ 
    width: '475px',
   
    
    }} options={options} >
      <Line data={data} />
    </div>
  );
}