require("dotenv").config();

const port = process.env.PORT;

const app = require("./server.js");

app.listen(port, () => console.log(`Listening on port ${port}`));
