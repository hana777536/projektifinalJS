document
  .getElementById("entryForm")
  .addEventListener("submit", async (e) => {

    e.preventDefault();

    const entry = {

      date: document.getElementById("date").value,

      project: document.getElementById("project").value,

      hours: document.getElementById("hours").value
    };

    await fetch(
      "http://localhost:3000/entries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
      }
    );

    window.location.href =
      "dashboard.html";
});