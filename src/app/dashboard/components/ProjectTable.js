export default function ProjectTable({ projects, onDelete, onEdit }) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Title</th>
          <th className="border p-2">Link</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p._id}>
            <td className="border p-2">{p.title}</td>
            <td className="border p-2">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {p.link}
              </a>
            </td>
            <td className="border p-2 flex gap-2">
              <button
                onClick={() => onEdit(p)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(p._id)}
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
