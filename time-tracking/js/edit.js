const params =
  new URLSearchParams(
    window.location.search
  );

const id = params.get("id");

async function loadEntry() {

  const response = await fetch(
    `http://localhost:4002/entries/${id}`
  );

  const entry = await response.json();

  document.getElementById("date").value =
    entry.date;

  document.getElementById("project").value =
    entry.project;

  document.getElementById("hours").value =
    entry.hours;
}

loadEntry();

document
  .getElementById("entryForm")
  .addEventListener("submit", async (e) => {

    e.preventDefault();

    await fetch(
      `http://localhost:3000/entries/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          date:
            document.getElementById("date").value,

          project:
            document.getElementById("project").value,

          hours:
            document.getElementById("hours").value
        })
      }
    );

    window.location.href =
      "dashboard.html";
});