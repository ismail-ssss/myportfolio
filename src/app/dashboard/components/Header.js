// export default function Header() {
//   return (
//     <div className="flex justify-end items-center p-4 bg-white shadow">
//       <span className="mr-4">Admin</span>
//       <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
//         Logout
//       </button>
//     </div>
//   );
// }

export default function Header({ onMenuClick }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b">
      {/* Hamburger menu for mobile */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-gray-700 p-2 rounded hover:bg-gray-200"
      >
        ☰
      </button>

      <div className="flex items-center gap-3 sm:gap-4 ml-auto ">
        <span className="sm:inline text-sm sm:text-base">Admin</span>
        <button className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded hover:bg-red-600 text-sm sm:text-base">
          Logout
        </button>
      </div>
    </header>
  );
}
