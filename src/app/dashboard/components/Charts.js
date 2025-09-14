// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export default function Charts({ data, title }) {
//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="text-gray-700 mb-2">{title}</h3>
//       <Line data={data} />
//     </div>
//   );
// }

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts({ data, title }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
  };

  return (
    <div className="bg-white p-2 sm:p-4 rounded shadow w-full h-64 min-w-[280px]">
      <h3 className="text-gray-700 mb-2">{title}</h3>
      <div className="h-64 sm:h-80">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { font: { size: 10 } } },
            },
            scales: {
              x: { ticks: { font: { size: 10 } } },
              y: { ticks: { font: { size: 10 } } },
            },
          }}
        />
      </div>
    </div>
  );
}
