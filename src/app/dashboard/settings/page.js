// "use client";
// import { useEffect, useState } from "react";
// import { getSettings, updateSettings, removeSettings } from "@/apis/apis";

// export default function SettingsPage() {
//   const [user, setUser] = useState({ name: "", email: "", bio: "" });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getSettings();
//         console.log(data);
//         setUser(data || { name: "", email: "", bio: "" });
//         setLoading(false);
//       } catch (e) {
//         setLoading(false);
//         console.log(e);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleUpdate = async () => {
//     await updateSettings(user);
//     alert("Settings updated!");
//   };

//   const handleRemove = async () => {
//     if (confirm("Are you sure you want to remove your details?")) {
//       await removeSettings();
//       setUser({ name: "", email: "", bio: "" });
//       alert("Settings removed!");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">My Details</h2>
//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={user.name}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <textarea
//           name="bio"
//           placeholder="Bio"
//           value={user.bio}
//           onChange={handleChange}
//           className="border p-2 rounded"
//         />
//         <div className="flex gap-2">
//           <button
//             onClick={handleUpdate}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Update
//           </button>
//           <button
//             onClick={handleRemove}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { getSettings, updateSettings, removeSettings } from "@/apis/apis";

export default function SettingsPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    bio: "",
    links: [], // dynamic array of links
  });
  const [loading, setLoading] = useState(true);

  // Fetch user settings on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSettings();
        setUser({
          name: data?.name || "",
          email: data?.email || "",
          bio: data?.bio || "",
          links: data?.links || [],
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Handle basic input changes (name, email, bio)
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle dynamic links changes
  const handleLinkChange = (index, field, value) => {
    const newLinks = [...user.links];
    newLinks[index][field] = value;
    setUser({ ...user, links: newLinks });
  };

  // Add new empty link
  const addLink = () => {
    setUser({ ...user, links: [...user.links, { label: "", url: "" }] });
  };

  // Remove link by index
  const removeLink = (index) => {
    const newLinks = user.links.filter((_, i) => i !== index);
    setUser({ ...user, links: newLinks });
  };

  // Update settings API
  const handleUpdate = async () => {
    try {
      await updateSettings(user);
      alert("Settings updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update settings.");
    }
  };

  // Remove settings API
  const handleRemove = async () => {
    if (confirm("Are you sure you want to remove your details?")) {
      try {
        await removeSettings();
        setUser({ name: "", email: "", bio: "", links: [] });
        alert("Settings removed!");
      } catch (err) {
        console.error(err);
        alert("Failed to remove settings.");
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Details</h2>

      <div className="flex flex-col gap-4">
        {/* Basic Info */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={user.bio}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Dynamic Links */}
        <h3 className="text-lg font-semibold mt-4">Links</h3>
        {user.links.map((link, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Label (e.g., GitHub)"
              value={link.label}
              onChange={(e) => handleLinkChange(index, "label", e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <input
              type="text"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleLinkChange(index, "url", e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addLink}
          className="text-blue-500 hover:underline mb-2"
        >
          + Add Link
        </button>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={handleRemove}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
