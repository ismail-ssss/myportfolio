// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";

// export default function EditProjectPage() {
//   const router = useRouter();
//   const params = useParams();
//   const { id } = params;

//   const [project, setProject] = useState({
//     title: "",
//     link: "",
//     description: "",
//     members: [],
//   });

//   // Load project
//   useEffect(() => {
//     async function fetchProject() {
//       const res = await fetch(`/api/projects/${id}`);
//       const data = await res.json();
//       setProject(data);
//     }
//     if (id) fetchProject();
//   }, [id]);

//   const handleChange = (e) => {
//     setProject({ ...project, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch(`/api/projects/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(project),
//     });
//     router.push("/dashboard/projects");
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={project.title}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="link"
//           placeholder="Project Link"
//           value={project.link}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={project.description}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState({
    title: "",
    description: "",
    link: "",
    images: [],
    team: [],
  });

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [id]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    router.push("/dashboard/projects");
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="link"
          value={project.link}
          onChange={handleChange}
          placeholder="Project Link"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
