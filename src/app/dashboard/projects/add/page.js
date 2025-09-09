"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]); // Array of File objects
  const [team, setTeam] = useState([{ name: "", role: "" }]);
  const router = useRouter();

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  // Remove an image
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle team member input
  const handleTeamChange = (index, field, value) => {
    const newTeam = [...team];
    newTeam[index][field] = value;
    setTeam(newTeam);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // For now, convert files to object URLs (for preview/testing)
    // In production, upload to server/cloud and get URLs
    const imageUrls = images.map((file) => URL.createObjectURL(file));

    const projectData = {
      title,
      link,
      description,
      images: imageUrls,
      team,
    };

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    if (res.ok) {
      router.push("/dashboard/projects");
    } else {
      alert("Failed to add project");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Project Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Multiple Images Upload */}
        <div>
          <h3 className="font-bold mb-2">Project Images</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2 rounded mb-2"
          />
          <div className="flex flex-wrap gap-2">
            {images.map((img, index) => (
              <div key={index} className="relative w-24 h-24">
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-full h-full object-cover rounded border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="font-bold mb-2">Team Members (optional)</h3>
          {team.map((member, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) =>
                  handleTeamChange(index, "name", e.target.value)
                }
                className="border p-2 rounded flex-1"
              />
              <input
                type="text"
                placeholder="Role"
                value={member.role}
                onChange={(e) =>
                  handleTeamChange(index, "role", e.target.value)
                }
                className="border p-2 rounded flex-1"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setTeam([...team, { name: "", role: "" }])}
            className="text-blue-500 hover:underline"
          >
            + Add Team Member
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
