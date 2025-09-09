export default function Header() {
  return (
    <div className="flex justify-end items-center p-4 bg-white shadow">
      <span className="mr-4">Admin</span>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}
