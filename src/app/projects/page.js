import Link from "next/link";

const projects = [
  { id: "cashflow", title: "CashFlow App" },
  { id: "portfolio", title: "Personal Portfolio" },
];

export default function ProjectsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="text-blue-500 hover:underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
