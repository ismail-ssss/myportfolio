// export default function StatsCard({ title, value, icon, color }) {
//   return (
//     <div
//       className={`p-4 bg-${color}-100 rounded shadow flex items-center gap-4`}
//     >
//       <div className={`text-${color}-500 text-2xl`}>{icon}</div>
//       <div>
//         <h3 className="text-gray-700">{title}</h3>
//         <p className="text-xl font-bold">{value}</p>
//       </div>
//     </div>
//   );
// }

const colorMap = {
  blue: { bg: "bg-blue-100", text: "text-blue-500" },
  green: { bg: "bg-green-100", text: "text-green-500" },
  red: { bg: "bg-red-100", text: "text-red-500" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-500" },
};

export default function StatsCard({ title, value, icon, color }) {
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className={`p-4 ${colors.bg} rounded shadow flex items-center gap-4`}>
      <div className={`${colors.text} text-2xl`}>{icon}</div>
      <div>
        <h3 className="text-gray-700 text-sm sm:text-base">{title}</h3>
        <p className="text-lg sm:text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
