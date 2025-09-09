export default function StatsCard({ title, value, icon, color }) {
  return (
    <div
      className={`p-4 bg-${color}-100 rounded shadow flex items-center gap-4`}
    >
      <div className={`text-${color}-500 text-2xl`}>{icon}</div>
      <div>
        <h3 className="text-gray-700">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
