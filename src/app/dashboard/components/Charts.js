// import { Line } from "react-chartjs-2";

// export default function Charts({ data, title }) {
//   console.log(data);
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
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-gray-700 mb-2">{title}</h3>
      <Line data={data} />
    </div>
  );
}
