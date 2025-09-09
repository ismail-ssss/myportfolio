"use client";
import StatsCard from "./components/StatsCard";
import ProjectTable from "./components/ProjectTable";
import Charts from "./components/Charts";

export default function DashboardPage() {
  const projects = []; // fetch from API
  const stats = [
    { title: "Total Visitors", value: 1200, icon: "👥", color: "blue" },
    { title: "Total Projects", value: 10, icon: "📁", color: "green" },
    { title: "Total Likes", value: 500, icon: "❤️", color: "red" },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Visitors",
        data: [200, 400, 300, 500],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.1)",
      },
    ],
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex flex-col gap-4 overflow-auto">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>
          <Charts data={chartData} title="Visitors Trend" />
          <ProjectTable
            projects={projects}
            onEdit={(p) => console.log("edit", p)}
            onDelete={(id) => console.log("delete", id)}
          />
        </div>
      </div>
    </div>
  );
}
