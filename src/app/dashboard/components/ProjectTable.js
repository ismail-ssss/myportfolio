export default function ProjectTable({ projects, onEdit, onDelete }) {
  return (
    <table className="min-w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Title</th>
          <th className="p-2 text-left">Created At</th>
          <th className="p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project._id} className="border-b">
            <td className="p-2">{project.title}</td>
            <td className="p-2">
              {new Date(project.createdAt).toLocaleDateString()}
            </td>
            <td className="p-2 flex gap-2">
              <button
                onClick={() => onEdit(project)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(project._id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
