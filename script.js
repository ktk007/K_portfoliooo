document.addEventListener("DOMContentLoaded", function () {
    // Sample JSON data
    const jsonData = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" }
    ];

    // Get the table and its tbody
    const table = document.getElementById("jsonTable");
    const tbody = table.querySelector("tbody");

    // Loop through the JSON data and create table rows
    jsonData.forEach(function (item) {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.name;
        row.insertCell(2).textContent = item.email;
    });
});