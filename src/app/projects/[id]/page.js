export default function ProjectDetails({ params }) {
  const { id } = params;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Project: {id}</h1>
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        Details about {id} will go here.
      </p>
    </main>
  );
}
