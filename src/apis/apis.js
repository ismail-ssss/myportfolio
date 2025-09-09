// import { BASE_URL } from "@/contens";

// async function getProjects() {
//   const res = await fetch(`${BASE_URL}/projects`, {
//     cache: "no-store",
//   });
//   return res.json();
// }

// export { getProjects };

import { BASE_URL } from "@/contens/index";

// Projects
async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`, { cache: "no-store" });
  return res.json();
}

// Settings / User details
async function getSettings() {
  const res = await fetch(`${BASE_URL}/details`, { cache: "no-store" });
  return res.json();
}

async function updateSettings(data) {
  const res = await fetch(`${BASE_URL}/details`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function removeSettings() {
  const res = await fetch(`${BASE_URL}/details`, {
    method: "DELETE",
  });
  return res.json();
}

export { getProjects, getSettings, updateSettings, removeSettings };
