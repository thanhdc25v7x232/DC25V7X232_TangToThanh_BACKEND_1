const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route"); // MỚI

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter); // MỚI

module.exports = app;