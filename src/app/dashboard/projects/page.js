"use client";

import { useState, useEffect } from "react";
import ProjectTable from "../components/ProjectTable";
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from API
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    setProjects(projects.filter((p) => p._id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Link
          href="/dashboard/projects/add"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add Project
        </Link>
      </div>
      <ProjectTable
        projects={projects}
        onDelete={handleDelete}
        onEdit={(p) => console.log("edit", p)}
      />
    </div>
  );
}
