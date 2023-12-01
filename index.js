const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.sqlite");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const port = 3002;

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Booking Form page
app.get("/bookingform", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "Bookingform.html"));
});

app.post("/bookingform", async (req, res) => {
  const { name, address, email, contact_no, indate, outdate } = req.body;

  try {
    // Assuming you have a User model or a table in your database
    const user = await db.query(
      "INSERT INTO users (name, address, email, contact_no, indate, outdate) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, email, contact_no, indate, outdate]
    );

    // You can also perform additional actions here if needed

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Booking failed. Please try again.");
  }
});

// Destination page
app.get("/goa", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Destination/goa/goa.html"));
});

app.get("/maldives", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/maldives/Maldives.html")
  );
});

app.get("/tajmahal", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/tajmahal/tajmahal.html")
  );
});

// Packages page

app.get("/Pondichery", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Pondichery/Pondichery.html")
  );
});

app.get("/NarmadaRiver", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "/Packages/Narmadha River/Narmadha River.html"
    )
  );
});
app.get("/manali", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Manaali/Manaali.html")
  );
});

app.get("/shimla", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Simla/Simla.html"));
});

app.get("/ooty", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Ooty/Ooty.html"));
});

app.get("/munar", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Munar/Munar.html"));
});

app.get("/bangalore", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Bengalur/Bengalur.html")
  );
});
app.get("/privacy&policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/privacy index.html"));
});

app.get("/tearms&condition", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/terms.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/faq.html"));
});

app.get("/chatbot", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/chatbot/chatbot.html"));
});

app.listen(port, () => {
  console.log("Node app is running at localhost:" + port);
});
