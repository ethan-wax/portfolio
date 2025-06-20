export default function ProjectsPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Project Title</h2>
          <p className="text-gray-700">Short project description goes here.</p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </main>
  );
} 