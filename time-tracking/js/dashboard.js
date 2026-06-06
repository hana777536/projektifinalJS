const user = JSON.parse(
  localStorage.getItem("currentUser")
);

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("username").textContent =
  user.name;

async function loadEntries() {

  const response = await fetch(
    `http://localhost:4002/entries/${id}`
  );

  const entries = await response.json();

  const table = document.getElementById(
    "entryTable"
  );

  table.innerHTML = "";

  entries.forEach((entry) => {

    table.innerHTML += `
      <tr>
        <td>${entry.date}</td>
        <td>${entry.project}</td>
        <td>${entry.hours}</td>

        <td>

        <a href="editEntry.html?id=${entry.id}">
            Edit
          </a>

          <button onclick="deleteEntry(${entry.id})">
            Delete
          </button>

        </td>
      </tr>
    `;
  });
}

async function deleteEntry(id) {

  await fetch(
    `http://localhost:4002/entries/${id}`,
    {
      method: "DELETE"
    }
  );

  loadEntries();
}

loadEntries();