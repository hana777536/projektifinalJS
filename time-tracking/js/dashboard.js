const user = JSON.parse(
  localStorage.getItem("currentUser")
);

document.getElementById("username").textContent =
  user.name;

async function loadEntries() {

  const response = await fetch(
    "http://localhost:3000/entries"
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

          <a href="edit-entry.html?id=${entry.id}">
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
    `http://localhost:3000/entries/${id}`,
    {
      method: "DELETE"
    }
  );

  loadEntries();
}

loadEntries();