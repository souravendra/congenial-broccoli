const express = require('express');
const app = express(); //instantiate the express framework


const tasks = [
    {
        id: 1,
        name: "Task 1",
        completed: false
    },
    {
        id: 2,
        name: "Task 2",
        completed: false
    },
    {
        id: 3,
        name: "Task 3",
        completed: false
    },
]

// GET
app.get("/", (request, response) => {
    response.send("Welcome to the Tasks api");
})
// POST

// PUT

// PATCH

// DELETE


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));