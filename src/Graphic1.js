
import React from "react";


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Total Enrollements", "Completion", "Quallified Candidates", "Reached Out", "Interview Set", "Candidates Hired"],
  datasets: [
    {
      label: "",
      data: [100000,65000, 850, 375, 300, 150],
      
    
      
      fill: true,
      backgroundColor: "rgb(191,0,255) ",
      borderColor: "rgb(191,0,255)"
    }
  ]
};
 
export default function Graphic1() {
  return (
    <div className="Graphic1">
      <Line data={data} />
    </div>
  );
}