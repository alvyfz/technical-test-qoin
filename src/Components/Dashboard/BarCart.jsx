import React from "react";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Icon } from "@iconify/react";

ChartJS.register(
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
);

function Chart(props) {
   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
      },
   };

   const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
         {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
               "rgba(255, 206, 86, 0.2)",
               "rgba(75, 192, 192, 0.2)",
               "rgba(153, 102, 255, 0.2)",
               "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
               "rgba(255, 99, 132, 1)",
               "rgba(54, 162, 235, 1)",
               "rgba(255, 206, 86, 1)",
               "rgba(75, 192, 192, 1)",
               "rgba(153, 102, 255, 1)",
               "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
         },
      ],
   };
   return (
      <>
         <div className="border">
            <div className="bg-bg1 py-2 flex">
               <Icon className="ml-2 mt-1" icon="bi:bar-chart-line" />
               <h4 className="pl-1 ">Graphic 1</h4>
            </div>
            <Bar options={options} data={data} />
         </div>
      </>
   );
}

export default Chart;
